// server.js
return users.find(u => u.username === username);
}


// Register route
app.post('/register', async (req, res) => {
try {
const { username, password } = req.body;
if (!username || !password) return res.status(400).json({ message: 'Username and password required' });


if (findUser(username)) return res.status(409).json({ message: 'Username already exists' });


const hash = await bcrypt.hash(password, 10); // bcrypt.hash(password, saltRounds)


users.push({ username, passwordHash: hash });


return res.status(201).json({ message: 'User registered successfully' });
} catch (err) {
console.error(err);
return res.status(500).json({ message: 'Server error' });
}
});


// Login route
app.post('/login', async (req, res) => {
try {
const { username, password } = req.body;
if (!username || !password) return res.status(400).json({ message: 'Username and password required' });


const user = findUser(username);
if (!user) return res.status(401).json({ message: 'Invalid credentials' });


const match = await bcrypt.compare(password, user.passwordHash);
if (!match) return res.status(401).json({ message: 'Invalid credentials' });


// Generate JWT
const payload = { username };
const token = jwt.sign(payload, JWT_SECRET, { expiresIn: '1h' });


return res.json({ message: 'Login Successful', token });
} catch (err) {
console.error(err);
return res.status(500).json({ message: 'Server error' });
}
});


// Middleware to protect routes
function authenticateToken(req, res, next) {
const authHeader = req.headers['authorization'];
if (!authHeader) return res.status(401).json({ message: 'Unauthorized' });


const parts = authHeader.split(' ');
if (parts.length !== 2 || parts[0] !== 'Bearer') return res.status(401).json({ message: 'Unauthorized' });


const token = parts[1];
jwt.verify(token, JWT_SECRET, (err, user) => {
if (err) return res.status(401).json({ message: 'Unauthorized' });
req.user = user; // { username }
next();
});
}


// Protected route
app.get('/profile', authenticateToken, (req, res) => {
const username = req.user.username;
return res.json({ message: `Welcome ${username}` });
});


// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
