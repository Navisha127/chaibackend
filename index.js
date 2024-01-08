const express = require ('express')

const app= express();
require('dotenv').config();
const port = 4000
const githubdata={
    "login": "Navisha127",
    "id": 154237550,
    "node_id": "U_kgDOCTF6bg",
    "avatar_url": "https://avatars.githubusercontent.com/u/154237550?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/Navisha127",
    "html_url": "https://github.com/Navisha127",
    "followers_url": "https://api.github.com/users/Navisha127/followers",
    "following_url": "https://api.github.com/users/Navisha127/following{/other_user}",
    "gists_url": "https://api.github.com/users/Navisha127/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/Navisha127/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/Navisha127/subscriptions",
    "organizations_url": "https://api.github.com/users/Navisha127/orgs",
    "repos_url": "https://api.github.com/users/Navisha127/repos",
    "events_url": "https://api.github.com/users/Navisha127/events{/privacy}",
    "received_events_url": "https://api.github.com/users/Navisha127/received_events",
    "type": "User",
    "site_admin": false,
    "name": null,
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 2,
    "public_gists": 0,
    "followers": 0,
    "following": 0,
    "created_at": "2023-12-18T13:08:45Z",
    "updated_at": "2023-12-18T13:08:45Z"
}

app.get('/',(req,res)=>{
res.send("Hellooooo");
})

app.get('/login',(req,res)=>{
    res.send("Login here");
})

app.get('/github',(req,res)=>{
    res.json(githubdata);
})

app.listen(process.env.port , ()=>{
    console.log("Listening to port : " + port);
    console.log("Listening to port : " + process.env.port);
})