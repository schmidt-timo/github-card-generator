import Head from 'next/head';
import Link from 'next/link';
import * as card from '../../components/cardStyle';
import axios from 'axios'
import React from 'react';

// Icons
import HeartIcon from 'mdi-react/HeartIcon'
import StarIcon from 'mdi-react/StarIcon'
import PineTreeIcon from 'mdi-react/PineTreeIcon'
import TieIcon from 'mdi-react/TieIcon'
import PizzaIcon from 'mdi-react/PizzaIcon'
import RocketLaunchIcon from 'mdi-react/RocketLaunchIcon'
import GithubIcon from 'mdi-react/GithubIcon'
import LayersIcon from 'mdi-react/LayersIcon'
import GhostIcon from 'mdi-react/GhostIcon'
import UnicornIcon from 'mdi-react/UnicornIcon'
import SourceForkIcon from 'mdi-react/SourceForkIcon'

const Card = (props) => {

    var Color = require('color');
    var darkerColor = Color(props.color).darken(0.4);

    const getIcons = (icon) => {
        var result = [];
        
        const icons = [
          <GithubIcon color="white" size="2.5em"/>,
          <HeartIcon color="white" size="2.5em"/>,
          <PineTreeIcon color="white" size="2.5em"/>,
          <StarIcon color="white" size="2.5em"/>,
          <TieIcon color="white" size="2.5em"/>,
          <RocketLaunchIcon color="white" size="2.5em"/>,
          <PizzaIcon color="white" size="2.5em"/>,
          <LayersIcon color="white" size="2.5em"/>,
          <GhostIcon color="white" size="2.5em"/>,
          <UnicornIcon color="white" size="2.5em"/>
        ]
    
          result.push(
            <Link href={repoLink} key={icon}>
                <card.Icon iconColor={props.color}>
                {icons[icon]}
                </card.Icon> 
            </Link>
          )
    
        return result;
      }
      
      const getTopContributors = () => {
        var contributors = [];
        if (props.contributors.length > 1) {
            var count = 0;
            for (var c of props.contributors) {
                if (count < 10) {
                    var contributorLink = "https://github.com/" + c.login;

                    contributors.push(
                        <Link href={contributorLink} key={c.id}>
                            <card.Contributor >{c.login}</card.Contributor>
                        </Link>
                        )
                    }
                    count++;
                }
        } else {
            var contributorLink = "https://github.com/" + props.contributors[0].login;

            contributors.push(
                <Link href={contributorLink} key = {props.contributors[0].id}>
                    <card.Contributor>{props.contributors[0].login}</card.Contributor>
                </Link>
            )
        }
        return contributors;
    }
                
    // for buttons
    const userLink = "https://github.com/" + props.username;
    const repoLink = "https://github.com/" + props.username + "/" + props.repo;
    const starCountLink = repoLink + "/stargazers";
    const forkCountLink = repoLink + "/network/members";
    const forkLink = repoLink + "/fork";

    return (
        <>
            <Head>
                <title>Github Cards - {props.data.name}</title>
            </Head>
            
            <card.SiteWrapper bgcolor={props.color}>
                <card.ContentWrapper>

                    <card.TopWrapper>
                        <card.AuthorWrapper>
                            <card.AuthorImg src={props.data.owner.avatar_url} />
                            <Link href={userLink}>
                                <card.AuthorName>{props.data.owner.login}</card.AuthorName>
                            </Link>
                        </card.AuthorWrapper>
                    </card.TopWrapper>

                    <card.RepoWrapper>
                        {getIcons(props.icon)}
                        <card.RepoTitleLimiter>
                            <Link href={repoLink}>
                                <card.RepoTitle>{props.data.name}</card.RepoTitle>
                            </Link>
                        </card.RepoTitleLimiter>
                        <card.RepoTextLimiter>
                            <card.RepoDesc>{props.data.description}</card.RepoDesc>
                        </card.RepoTextLimiter>
                    </card.RepoWrapper>

            <card.Contributions>
                <card.ContributorTitle>Top 10 Contributors:</card.ContributorTitle>
                {getTopContributors()}
            </card.Contributions>
        
            <card.OutputArea color={darkerColor}>
                <card.ButtonWrapper>
                    <card.ButtonGroup>
                        <Link href={repoLink}>
                            <card.SmallButton>
                                <StarIcon color="black" size="1.5em"/>
                                <a href="">Star</a>
                            </card.SmallButton>
                        </Link>
                        <Link href={starCountLink}>
                            <card.Counter>{props.data.stargazers_count}</card.Counter>
                        </Link>
                    </card.ButtonGroup>
                    <card.ButtonGroup>
                        <Link href={forkLink}>
                            <card.SmallButton>
                                <SourceForkIcon color="black" size="1.5em"/>
                                <a href="">Fork</a>
                            </card.SmallButton>
                        </Link>
                        <Link href={forkCountLink}>
                            <card.Counter>{props.data.forks_count}</card.Counter>
                        </Link>
                    </card.ButtonGroup>
                </card.ButtonWrapper>
            </card.OutputArea>

      </card.ContentWrapper>
    </card.SiteWrapper>
    </>
    )
}

export default Card;

export async function getServerSideProps(context) {

    const id = context.params.id;
    const card = await axios.get("http://localhost:3000/api/getCard/" + id);

    const username = card.data.githubCard.username;
    const repo = card.data.githubCard.repo;
    const color = card.data.githubCard.color;
    const icon = card.data.githubCard.icon;

    const res = await fetch("https://api.github.com/repos/" + username + "/" + repo, {
        headers: {
            Authorization: "token " + process.env.TOKEN
          }
    });
    const data = await res.json();

    if (!data) {
        return {
            notFound: true
        }
    }

    const allContributors = await fetch("https://api.github.com/repos/" + username + "/" + repo + "/contributors", {
        headers: {
            Authorization: "token " + process.env.TOKEN
          }
    });
    const contributors = await allContributors.json();

    if (!contributors) {
        return {
            notFound: true
        }
    }
    
    return {
        props: {
            username: username,
            repo: repo,
            color: color,
            icon: icon,
            data: data,
            contributors: contributors
        }
    }
}
