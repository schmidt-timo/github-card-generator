import Head from 'next/head'
import * as style from '../components/generatorStyle'
import React, {useRef} from 'react';
import axios from 'axios';
// Icons
import HeartIcon from 'mdi-react/HeartIcon';
import StarIcon from 'mdi-react/StarIcon';
import PineTreeIcon from 'mdi-react/PineTreeIcon';
import TieIcon from 'mdi-react/TieIcon';
import PizzaIcon from 'mdi-react/PizzaIcon';
import RocketLaunchIcon from 'mdi-react/RocketLaunchIcon';
import GithubIcon from 'mdi-react/GithubIcon';
import LayersIcon from 'mdi-react/LayersIcon';
import GhostIcon from 'mdi-react/GhostIcon';
import UnicornIcon from 'mdi-react/UnicornIcon';
import ContentCopyIcon from 'mdi-react/ContentCopyIcon';

const Home = () => {

  const [username, setUsername] = React.useState("");
  const [repo, setRepo] = React.useState("");
  const [color, setColor] = React.useState("#2483F0");
  const [icon, setIcon] = React.useState(null);

  const buttonAction = () => {

    // create unique id
    var uniqid = require('uniqid');
    const id = uniqid();

    // check if everything was filled out
    if (username == "" || repo == "") {
      alert("GitHub username and/or repository name is missing.")
      return;
    }
    if (icon == null) {
      alert("Please select an icon.")
      return;
    }

    // check if github user/repo does exist
    axios.get('/getRepoInfo/' + username + '/' + repo)
    .then(function (response) {
      
      // post to mongo
      axios.post('/createCard', {
        id: id,
        username: username,
        repo: repo,
        color: color,
        icon: icon,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

      // create Link and return
      const link = "http://localhost:3000/r/" + id;
      document.getElementsByName('outputField')[0].style.visibility = "visible";
      document.getElementsByName('output')[0].value = link;

    })
    .catch(function (err) {
      console.log(err);
      alert("Repository does not exist.")
    });  

  };

  const output = useRef(null);

  function copyToClipboard(e) {
    output.current.select();
    document.execCommand('copy');
    e.target.focus();
  };

  return (
    <> 
      <Head>
        <title>Github Card Generator</title>
      </Head>

      <style.SiteWrapper>
      <style.ContentWrapper>

        <style.TopWrapper>

          <style.Title>Github Card Generator</style.Title>

            <style.Label>Github user name</style.Label>
            <style.InputLine onChange = {(e) => setUsername(e.target.value)}/>

            <style.Label>Github repository name</style.Label>
            <style.InputLine onChange = {(e) => setRepo(e.target.value)}/>

            <style.Label>Select color</style.Label>
              <style.ColorPicker>
              <span><input type = "color"
                value = {color}
                onChange = {(e) => setColor(e.target.value)}
              /></span>
              </style.ColorPicker>


            <style.Label>Select icon</style.Label>
            <style.IconSelector>

            <style.IconRow>

              <style.IconPick>
                  <input type="radio" value="0" name="iconPicker"
                  onClick={(e) => setIcon(e.target.value)} />
                  <style.Icon>
                    <GithubIcon color="white"/>
                  </style.Icon>
                </style.IconPick>

                <style.IconPick>
                  <input type="radio" value="1" name="iconPicker"
                  onClick={(e) => setIcon(e.target.value)} />
                  <style.Icon>
                    <HeartIcon color="white"/>
                  </style.Icon>
                </style.IconPick>

                <style.IconPick>
                  <input type="radio" value="2" name="iconPicker"
                  onClick={(e) => setIcon(e.target.value)} />
                  <style.Icon>
                    <PineTreeIcon color="white"/>
                  </style.Icon>
                </style.IconPick>

                <style.IconPick>
                  <input type="radio" value="3" name="iconPicker"
                  onClick={(e) => setIcon(e.target.value)} />
                  <style.Icon>
                    <StarIcon color="white"/>
                  </style.Icon>
                </style.IconPick>

                <style.IconPick>
                  <input type="radio" value="4" name="iconPicker"
                  onClick={(e) => setIcon(e.target.value)} />
                  <style.Icon>
                    <TieIcon color="white"/>
                  </style.Icon>
                </style.IconPick>

            </style.IconRow>

            <style.IconRow>

            <style.IconPick>
                <input type="radio" value="5" name="iconPicker"
                onClick={(e) => setIcon(e.target.value)} />
                <style.Icon>
                  <RocketLaunchIcon color="white"/>
                </style.Icon>
              </style.IconPick>

              <style.IconPick>
                <input type="radio" value="6" name="iconPicker"
                onClick={(e) => setIcon(e.target.value)} />
                <style.Icon>
                  <PizzaIcon color="white"/>
                </style.Icon>
              </style.IconPick>

              <style.IconPick>
                <input type="radio" value="7" name="iconPicker"
                onClick={(e) => setIcon(e.target.value)} />
                <style.Icon>
                  <LayersIcon color="white"/>
                </style.Icon>
              </style.IconPick>

              <style.IconPick>
                <input type="radio" value="8" name="iconPicker"
                onClick={(e) => setIcon(e.target.value)} />
                <style.Icon>
                  <GhostIcon color="white"/>
                </style.Icon>
              </style.IconPick>

              <style.IconPick>
                <input type="radio" value="9" name="iconPicker"
                onClick={(e) => setIcon(e.target.value)} />
                <style.Icon>
                  <UnicornIcon color="white"/>
                </style.Icon>
              </style.IconPick>

            </style.IconRow>

            </style.IconSelector>

            <style.Button onClick={buttonAction}>Create card</style.Button>
          </style.TopWrapper>

          <style.OutputArea>
            <style.OutputWrapper name="outputField" visibility="hidden">
              <style.Output 
                type = "textbox"
                name = "output"
                ref = {output}
              />
              <style.CopyButton onClick={copyToClipboard}>
                <ContentCopyIcon color="white" size="1.5em" />
              </style.CopyButton>
            </style.OutputWrapper>
          </style.OutputArea>

      </style.ContentWrapper>
    </style.SiteWrapper>
    </>
  )
}

export default Home;