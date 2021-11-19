const express = require('express');
const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());

const playlist = [
    {
        id: 1,
        song: {
            singer: 'singer name',
            songName: 'song name',
        },
    },
    {
        id: 2,
        song: {
            singer: 'second singer name',
            songName: 'second song name',
        },
    },
];

const users = [
    {
        id: 1,
        name: 'User1',
        email: 'user1@example.com',
        nickname: 'User1-nickname',
        password: 'password',
    },
];

app.get('/', (req, res) => {
    return res.sendStatus(200);
});

app.get('/playlists', (req, res) => {
    return res.sendStatus(200);
});

app.get('/playlists/:id', (req, res) => {
    const id = req.params.id;
    const foundPlaylist = playlist.find((song) => song.id === parseInt(id));

    return res.json(foundPlaylist).sendStatus(200);
});

app.get('/login', (req, res) => {
    const { email, password } = req.body;

    const foundUser = users.find(
        (e) => e.email === email && e.password === password
    );

    if (!foundUser) return res.sendStatus(401);

    return res
        .json({ user: foundUser.nickname, email: foundUser.email })
        .sendStatus(200);
});

app.post('/playlists', (req, res) => {
    const { playlist } = req.body;

    playlist.push(playlist);
});

app.post('/users', (req, res) => {
    const { user } = req.body;

    const result = users.push(user);

    return res.json(result).sendStatus(201);
});

app.get('/users', (req, res) => {
    const { user } = req.body;

    const foundUser = users.find((e) => e.id === user.id);

    if (!foundUser) return res.sendStatus(404);

    const { name, email, nickname } = foundUser;

    const newUser = {
        name,
        email,
        nickname,
    };

    return res.json(newUser).sendStatus(200);
});

app.put('/users', (req, res) => {
    const { user, newData } = req.body;

    const foundUser = users.find((e) => e.id === user.id);

    if (!foundUser) return res.sendStatus(404);

    const updatedUser = { ...foundUser, ...newData };

    return res.json(updatedUser).sendStatus(200);
});

app.get('/songs', (req, res) => {});

app.post('/playlists/:playlistId/songs', (req, res) => {
    const id = req.params.playlistId;
    const { song } = req.body;

    playlist.push(song);

    return res.json(playlist).sendStatus(201);
});

app.delete('/playlists/:playlistId/songs', (req, res) => {
    const id = req.params.playlistId;
    const { song } = req.body;

    const newPlaylist = playlist.filter((e) => e.id !== song.id);

    playlist = newPlaylist;

    return res.json(newPlaylist).sendStatus(200);
});

app.listen(port, () => {
    console.log(`Express listening on port ${port}`);
});