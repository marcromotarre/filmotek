import axios from "axios";
import { useEffect } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import {
  jwtState,
  userChipState,
  userPlatformsState,
  userPosterState,
  userRankingPlatformsState,
} from "../states/user-state";
export default function Common() {
  const setUserJWT = useSetRecoilState(jwtState);
  const setUserRankingPlatforms = useSetRecoilState(userRankingPlatformsState);
  const setChip = useSetRecoilState(userChipState);
  const setPoster = useSetRecoilState(userPosterState);
  const setUserPlatform = useSetRecoilState(userPlatformsState);

  useEffect(() => {
    getIn();
  }, []);

  const getIn = async () => {
    const { data: token } = await axios.post(`http://localhost:3005/signin`, {
      email: "marcromotarre@gmail.com",
      password: "admin",
    });

    setUserJWT(token.data);

    // get user config
    const {
      data: { data: userParams },
    } = await axios(`http://localhost:3005/api/user-params`, {
      headers: {
        Authorization: `Bearer ${token.data}`,
      },
    });

    setUserRankingPlatforms({
      ranking_platform: userParams.useFilmaffinity
        ? "FILMAFFINITY"
        : userParams.useIMDB
        ? "IMDB"
        : "ROTTEN_TOMATOES",
      FILMAFFINITY: {
        minimum_rating_value: 3,
        minimum_votes_value: 500,
      },
      IMDB: {
        minimum_rating_value: 0,
        minimum_votes_value: 0,
      },
      ROTTEN_TOMATOES: {
        minimum_rating_value: 0,
        minimum_votes_value: 0,
      },
    });

    setChip(userParams.chip);
    setPoster(userParams.poster);
    setUserPlatform({
      NETFLIX: userParams.hasNetflix,
      HBO: userParams.hasHBO,
      AMAZON_PRIME_VIDEO: userParams.hasAmazonPrimeVideo,
      DISNEY: userParams.hasDisneyPlus,
      APPLE: userParams.hasAppleTV,
      FILMIN: userParams.hasFilmin,
    });
  };
  return <></>;
}
