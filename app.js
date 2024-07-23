const express = require('express');
const app = express();

const userModel = require('./models/user');
const postModel = require('./models/post');
const user = require('./models/user');

app.get('/', (req, res) => {
    res.send('aaj magic hoga');
})
app.get('/create', async (req, res) => {
    let user = await userModel.create({
        username: 'jaani',
        age: 25,
        email: 'jaaniafsana@gmail.com'
    })
    res.send(user);
})
app.get('/post/create', async (req, res) => {
    let post = await postModel.create({
        postdata: `how's everything going?`,
        user: `669f203dcd69b8ab625ad52e`,
    })
    // user ko bhi btayenge post ke baare mein
    let user = await userModel.findOne({_id: `669f203dcd69b8ab625ad52e`});
    user.posts.push(post._id);
    // kyunki humne haath se save kiya hai to usko save bhi karna padega
    await user.save();
    res.send({user: user, post: post});
})

app.listen(3000, () => console.log('server running at 3000'));