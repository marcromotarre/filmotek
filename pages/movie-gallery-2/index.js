import { Box, CardMedia, Grid, Typography } from "@mui/material";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import IMDB_CHIP_ICON from "../../src/images/ranking-platforms/imdb/imdb-chip-icon.png";
import { Inter } from "@next/font/google";

const inter = Inter({
  weight: "900",
});

const MovieGallery = () => {
  const [movies, setMovies] = useState([]);
  const [token, setToken] = useState("");
  useEffect(() => {
    loadMovies();
  }, []);

  const loadMovies = async () => {
    /*    const { data: _token } = await axios.post(
      `${process.env.FILMOTEK_API}/signin`,
      {
        email: process.env.FILMOTEK_USER,
        password: process.env.FILMOTEK_PASSWORD,
      }
    );
    setToken(_token);
    const _movies = await axios(
      `${process.env.FILMOTEK_API}/api/movie-gallery`,
      {
        headers: {
          Authorization: `Bearer ${_token}`,
        },
      }
    );
    console.log(_movies);*/
    setMovies([
      {
        name: "Whiplash",
        image: "/sL32IZkyjlF7otj5vcUxiKSKzg5.jpg",
        platforms: {
          imdbMovie: {
            rating: 8.5,
          },
        },
      },
      {
        name: "Violet Evergarden: La película",
        image: "/mpNG6z33xOtUWuOU83BE0bvorxi.jpg",
        platforms: {
          imdbMovie: {
            rating: 8.3,
          },
        },
      },
      {
        name: "Winter on Fire",
        image: "/50ygDdzH1sK8b92FCurOexzJQOf.jpg",
        platforms: {
          imdbMovie: {
            rating: 8.3,
          },
        },
      },
      {
        name: "Virunga",
        image: "/b59YdJZyRUu04hnWdmmz4kPjbTF.jpg",
        platforms: {
          imdbMovie: {
            rating: 8.2,
          },
        },
      },
      {
        name: "Vizontele",
        image: "/4G7bL2pZ9KDDbWRy8MzW3UYMDoc.jpg",
        platforms: {
          imdbMovie: {
            rating: 8,
          },
        },
      },
      {
        name: "What Happened, Miss Simone?",
        image: "/zfU6mfxPns34TRwxKhp5pyBIgJt.jpg",
        platforms: {
          imdbMovie: {
            rating: 7.6,
          },
        },
      },
      {
        name: "Yessongs",
        image: "/gHWubH25DyKTVN8BPMrqpuGJxKA.jpg",
        platforms: {
          imdbMovie: {
            rating: 7.6,
          },
        },
      },
      {
        name: "Yeh Ballet",
        image: "/1P2bHU0CyV40llLcwsaSOxuMXff.jpg",
        platforms: {
          imdbMovie: {
            rating: 7.5,
          },
        },
      },
      {
        name: "Went the Day Well? (48 Hours)",
        image: "/xmDHaRLWnj0kU91iUliyDTSwpQk.jpg",
        platforms: {
          imdbMovie: {
            rating: 7.5,
          },
        },
      },
      {
        name: "Vaquero del mediodía",
        image: "/jdyHMwLdEGLoHjKh6NvIE7mNNDv.jpg",
        platforms: {
          imdbMovie: {
            rating: 7.5,
          },
        },
      },
      {
        name: "Violet Evergarden: La eternidad y la muñeca de recuerdos automáticos",
        image: "/boucOq75ImM3WDD39YbPH796LQw.jpg",
        platforms: {
          imdbMovie: {
            rating: 7.4,
          },
        },
      },
      {
        name: "Una revolución en toda regla",
        image: "/pKYHYlujtTDS0kZM80MUX7l3T58.jpg",
        platforms: {
          imdbMovie: {
            rating: 7.4,
          },
        },
      },
      {
        name: "Weed the People",
        image: "/3jHkqOfoZtjxXRhKa9gY3xMLymy.jpg",
        platforms: {
          imdbMovie: {
            rating: 7.3,
          },
        },
      },
      {
        name: "Una sombra en mi ojo",
        image: "/wZ64CPxqoAeM043s7JaDMC94m6.jpg",
        platforms: {
          imdbMovie: {
            rating: 7.3,
          },
        },
      },
      {
        name: "Woman in a Dressing Gown",
        image: "/gBOR3FwMheSBLyB6WpyJdDS2f9D.jpg",
        platforms: {
          imdbMovie: {
            rating: 7.3,
          },
        },
      },
      {
        name: "Ya no estoy aquí",
        image: "/min2PJ67s9HUD5ZeCSKTfSgniSC.jpg",
        platforms: {
          imdbMovie: {
            rating: 7.3,
          },
        },
      },
      {
        name: "Yo soy Dolemite",
        image: "/c5GgrsNkdyJeEFiqckBKd4voaxU.jpg",
        platforms: {
          imdbMovie: {
            rating: 7.2,
          },
        },
      },
      {
        name: "Vida privada",
        image: "/c0LxunoOD30s1d9fgwFQ0JTUCva.jpg",
        platforms: {
          imdbMovie: {
            rating: 7.2,
          },
        },
      },
      {
        name: "Wingmen",
        image: "/aM3iLTAUozxlRoefq8A6Jkt6Hne.jpg",
        platforms: {
          imdbMovie: {
            rating: 7.2,
          },
        },
      },
      {
        name: "Welcome to the Machine",
        image: "/bsVVMx42JQtXudFnsGbWyVcSnWz.jpg",
        platforms: {
          imdbMovie: {
            rating: 7.2,
          },
        },
      },
      {
        name: "What the Health",
        image: "/sz9cPeSmiGLA1EDUPszlrWfSrId.jpg",
        platforms: {
          imdbMovie: {
            rating: 7.2,
          },
        },
      },
      {
        name: "Virgen a los 40",
        image: "/zdvw34l1lInfOPh5dOURt41BPmF.jpg",
        platforms: {
          imdbMovie: {
            rating: 7.1,
          },
        },
      },
      {
        name: "La aldea de las vacas nadadoras",
        image: "/ySeVF2Q0tp8ky7Qv4XNAjYPjtuW.jpg",
        platforms: {
          imdbMovie: {
            rating: 7.1,
          },
        },
      },
      {
        name: "Voces por la libertad",
        image: "/rWR8dheNhJfaKcPAN5n58K7ve2o.jpg",
        platforms: {
          imdbMovie: {
            rating: 7.1,
          },
        },
      },
      {
        name: "Vilas: serás lo que debas ser o no serás nada",
        image: "/nnPZJRhxiHNDo67eyzJaUFOs2jj.jpg",
        platforms: {
          imdbMovie: {
            rating: 7.1,
          },
        },
      },
      {
        name: "Waiting for Barcelona",
        image: "/38eGcUcZidpUVwCsOdsnLtWO8HB.jpg",
        platforms: {
          imdbMovie: {
            rating: 7,
          },
        },
      },
      {
        name: "Vivir es fácil con los ojos cerrados",
        image: "/xnKaQnNGFjM8hRZpdARABWYwR7a.jpg",
        platforms: {
          imdbMovie: {
            rating: 7,
          },
        },
      },
      {
        name: "Y respiren normalmente",
        image: "/s9upKE5yXHr38g1F57TycxEzx4q.jpg",
        platforms: {
          imdbMovie: {
            rating: 6.9,
          },
        },
      },
      {
        name: "Ya no me siento a gusto en este mundo",
        image: "/8cb4APubOIrauUg1QWoQxDWo7Kw.jpg",
        platforms: {
          imdbMovie: {
            rating: 6.9,
          },
        },
      },
      {
        name: "Una vida en tres días",
        image: "/tl1ZFQk80Ic0vwWHxMruekJHeJ.jpg",
        platforms: {
          imdbMovie: {
            rating: 6.9,
          },
        },
      },
      {
        name: "Unbreakable Kimmy Schmidt: Kimmy contra el reverendo",
        image: "/3lOYicrgvA6982iVUpD9860qf7X.jpg",
        platforms: {
          imdbMovie: {
            rating: 6.9,
          },
        },
      },
      {
        name: "Vida y aventuras de Nicholas Nickleby",
        image: "/ljEOQFFDWxKgdf2GnXzQzUsee4M.jpg",
        platforms: {
          imdbMovie: {
            rating: 6.9,
          },
        },
      },
      {
        name: "True: Friendship Day",
        image: "/4NslNr7YGfBOCJa49L9kUfdDVIH.jpg",
        platforms: {
          imdbMovie: {
            rating: 6.9,
          },
        },
      },
      {
        name: "Yolanda: El secreto de la rosa negra",
        image: "/tfbXT5vllSpbtGMGTljOAV9otDQ.jpg",
        platforms: {
          imdbMovie: {
            rating: 6.8,
          },
        },
      },
      {
        name: "Way Upstream",
        image: "/yMdObKFgh1nBjjcitH6UaMBHUjr.jpg",
        platforms: {
          imdbMovie: {
            rating: 6.8,
          },
        },
      },
      {
        name: "Upstarts",
        image: "/pBt3CbqUra6Z6wBUBhAF908FSMu.jpg",
        platforms: {
          imdbMovie: {
            rating: 6.7,
          },
        },
      },
      {
        name: "Снимка с Юки",
        image: "/wGdzEmM9YOvCYEDM4ItlFicTLjK.jpg",
        platforms: {
          imdbMovie: {
            rating: 6.7,
          },
        },
      },
      {
        name: "Warcraft: El origen",
        image: "/36zplRXApiw9QT1h0L6piEI906B.jpg",
        platforms: {
          imdbMovie: {
            rating: 6.7,
          },
        },
      },
      {
        name: "Volverás en mis sueños",
        image: "/dBN2Z525tklv9DSS3v7Tf7FWLoI.jpg",
        platforms: {
          imdbMovie: {
            rating: 6.7,
          },
        },
      },
      {
        name: "Uno más de la familia",
        image: "/eLkMb4AT31jABolXiEo3E7qeTKy.jpg",
        platforms: {
          imdbMovie: {
            rating: 6.7,
          },
        },
      },
      {
        name: "The Unknown Runner",
        image: "/epJVfppsL8hVAX0AQJkLNM40AQ8.jpg",
        platforms: {
          imdbMovie: {
            rating: 6.6,
          },
        },
      },
      {
        name: "Yo era famoso",
        image: "/bQorRsE0h6OhB3VdOXa8f2008UG.jpg",
        platforms: {
          imdbMovie: {
            rating: 6.6,
          },
        },
      },
      {
        name: "Vidas de papel",
        image: "/ozYkQIGsR7kPbu1yzjC7P3ph6vT.jpg",
        platforms: {
          imdbMovie: {
            rating: 6.6,
          },
        },
      },
      {
        name: "Z, la ciudad perdida",
        image: "/euNJtzdlTVVhnif2TKCHLV30i3A.jpg",
        platforms: {
          imdbMovie: {
            rating: 6.6,
          },
        },
      },
      {
        name: "Yo, adolescente",
        image: "/tBuYNodLru48rGFbBUM8TGBIxb6.jpg",
        platforms: {
          imdbMovie: {
            rating: 6.5,
          },
        },
      },
      {
        name: "Wendell y Wild",
        image: "/5dsX6UAHqkQz1kiV8bs8SvjyVNa.jpg",
        platforms: {
          imdbMovie: {
            rating: 6.5,
          },
        },
      },
      {
        name: "Vuelo nocturno",
        image: "/mJJXwUU43XwXbW0LTtycOkf7dlR.jpg",
        platforms: {
          imdbMovie: {
            rating: 6.5,
          },
        },
      },
      {
        name: "White Boy Rick",
        image: "/amM0t95H9ep0ZUcv0rWRxlLY0D6.jpg",
        platforms: {
          imdbMovie: {
            rating: 6.5,
          },
        },
      },
      {
        name: "Violet y Finch",
        image: "/ahxc3s9lAEcW6a1KJIiqCsQHMYH.jpg",
        platforms: {
          imdbMovie: {
            rating: 6.5,
          },
        },
      },
      {
        name: "WHAT DID JACK DO?",
        image: "/68FofMgclH1qCNXoL6foBqPfNFD.jpg",
        platforms: {
          imdbMovie: {
            rating: 6.4,
          },
        },
      },
      {
        name: "Valerian y la ciudad de los mil planetas",
        image: "/33EaftBKFbHBAbbaklwAeDd7Dx8.jpg",
        platforms: {
          imdbMovie: {
            rating: 6.4,
          },
        },
      },
      {
        name: "Y nadie más que tú",
        image: "/zEak97hxXEdgwm2Z22tUGoR4NlC.jpg",
        platforms: {
          imdbMovie: {
            rating: 6.4,
          },
        },
      },
      {
        name: "Ventoux",
        image: "/kwBNWk3O6nl7MrwTOHrxWRTyo76.jpg",
        platforms: {
          imdbMovie: {
            rating: 6.4,
          },
        },
      },
      {
        name: "Zabawa, zabawa",
        image: "/2BvCI6mvqUKdCtWgwKtKJETMGke.jpg",
        platforms: {
          imdbMovie: {
            rating: 6.4,
          },
        },
      },
      {
        name: "Una extraña del cosmos",
        image: "/cKaduVZXSqBIjwHdPERgSqZ9QGe.jpg",
        platforms: {
          imdbMovie: {
            rating: 6.4,
          },
        },
      },
      {
        name: "Wheelman",
        image: "/yeHRsKOlNDsbEIALS1ve6S42Nl6.jpg",
        platforms: {
          imdbMovie: {
            rating: 6.4,
          },
        },
      },
      {
        name: "Viaje a Groenlandia",
        image: "/lUPdRDYt6KaoFQijTtt6Ei0VyxN.jpg",
        platforms: {
          imdbMovie: {
            rating: 6.3,
          },
        },
      },
      {
        name: "Vidas truncadas",
        image: "/vm8qpSCl08Ud4v7MLHN1h3Nts1X.jpg",
        platforms: {
          imdbMovie: {
            rating: 6.3,
          },
        },
      },
      {
        name: "Viens chez moi, j’habite chez une copine",
        image: "/fNSRXUkdJadKgqhhlJlRLZjFjAi.jpg",
        platforms: {
          imdbMovie: {
            rating: 6.3,
          },
        },
      },
      {
        name: "Violette et François",
        image: "/zvJ6d6r94qwtvxyK2zfj4yRzOqU.jpg",
        platforms: {
          imdbMovie: {
            rating: 6.3,
          },
        },
      },
      {
        name: "Une affaire d'hommes",
        image: "/t0NKmgigh2lcCZRqh8fyeEYHjwl.jpg",
        platforms: {
          imdbMovie: {
            rating: 6.3,
          },
        },
      },
      {
        name: "Viva l'Italia",
        image: "/xVK4lKK0p5qxhWVsQt8EqL3f6jB.jpg",
        platforms: {
          imdbMovie: {
            rating: 6.2,
          },
        },
      },
      {
        name: "Zathura: Una aventura espacial",
        image: "/svCwqsP9UDr14fYDLawJfDgEsSD.jpg",
        platforms: {
          imdbMovie: {
            rating: 6.2,
          },
        },
      },
      {
        name: "When Cousins Marry",
        image: "/vS3XxyuwZwjtkRrpN4ByRCkaITH.jpg",
        platforms: {
          imdbMovie: {
            rating: 6.2,
          },
        },
      },
      {
        name: "Yaksha: Ruthless Operations",
        image: "/rw3udP9SMIpQaVzpuDedyeebiDy.jpg",
        platforms: {
          imdbMovie: {
            rating: 6.2,
          },
        },
      },
      {
        name: "Work It: Al ritmo de los sueños",
        image: "/gTwzFDmX5ngAmv4fNReQ2SDbleD.jpg",
        platforms: {
          imdbMovie: {
            rating: 6.1,
          },
        },
      },
      {
        name: "Yol Arkadaşım",
        image: "/aG6v0apKeBwcsa2tlhPb6YHqm87.jpg",
        platforms: {
          imdbMovie: {
            rating: 6.1,
          },
        },
      },
      {
        name: "Una preciosa puesta de sol",
        image: "/mEXAvtv7VhhogogjIa0FRzvsrqQ.jpg",
        platforms: {
          imdbMovie: {
            rating: 6,
          },
        },
      },
      {
        name: "Y mañana el mundo entero",
        image: "/qid8NlS6dbD5UXc6Ysaq8YUnGwr.jpg",
        platforms: {
          imdbMovie: {
            rating: 6,
          },
        },
      },
      {
        name: "Who Goes There!",
        image: "/cH47oDvXgDdKdwBPMfqNBepGX7p.jpg",
        platforms: {
          imdbMovie: {
            rating: 5.9,
          },
        },
      },
      {
        name: "Vivir sin freno: El turbulento mundo de John McAfee",
        image: "/k1Jsc4LPHma8MDcg1oBZrlRAfLL.jpg",
        platforms: {
          imdbMovie: {
            rating: 5.9,
          },
        },
      },
      {
        name: "Yo soy todas ellas",
        image: "/jAzX5TSKREp3Mhq7nqew4DcXjRZ.jpg",
        platforms: {
          imdbMovie: {
            rating: 5.9,
          },
        },
      },
      {
        name: "Uskyld",
        image: "/alOmBsao3qLbWceXvMcKcHfnoIE.jpg",
        platforms: {
          imdbMovie: {
            rating: 5.9,
          },
        },
      },
      {
        name: "Xtremo",
        image: "/5ghvx0Q5c57JoBNxFj4gSfXj6wK.jpg",
        platforms: {
          imdbMovie: {
            rating: 5.8,
          },
        },
      },
      {
        name: "Zipi y Zape y la isla del capitán",
        image: "/itBqyhOuyMitRIEXdWerRIvojRx.jpg",
        platforms: {
          imdbMovie: {
            rating: 5.8,
          },
        },
      },
      {
        name: "När mörkret faller",
        image: "/m0zfFlt26SnXxJezwQ6CpX5qjYv.jpg",
        platforms: {
          imdbMovie: {
            rating: 5.8,
          },
        },
      },
      {
        name: "Vampiros contra el Bronx",
        image: "/r55WHmiXzryJA0v5MlrwyFQXRTF.jpg",
        platforms: {
          imdbMovie: {
            rating: 5.7,
          },
        },
      },
      {
        name: "Velvet Buzzsaw",
        image: "/3rViQPcrWthMNecp5XnkKev6BzW.jpg",
        platforms: {
          imdbMovie: {
            rating: 5.7,
          },
        },
      },
      {
        name: "Warn That Man",
        image: "/4Bw4LAthJ8anA4WFflVTZzYjN3Y.jpg",
        platforms: {
          imdbMovie: {
            rating: 5.7,
          },
        },
      },
      {
        name: "Underworld: Guerras de sangre",
        image: "/18sAGzRcoWKJjaarTZM3GYJyzZp.jpg",
        platforms: {
          imdbMovie: {
            rating: 5.7,
          },
        },
      },
      {
        name: "Yucatán",
        image: "/6z3f3I2YLpaipyYGItOf7c7kqRK.jpg",
        platforms: {
          imdbMovie: {
            rating: 5.6,
          },
        },
      },
      {
        name: "Who Done It?",
        image: "/8dBdnDUkiSkXnVhVC9ZjDHv4Xd6.jpg",
        platforms: {
          imdbMovie: {
            rating: 5.6,
          },
        },
      },
      {
        name: "Wonderful Things!",
        image: null,
        platforms: {
          imdbMovie: {
            rating: 5.6,
          },
        },
      },
      {
        name: "The Big Call",
        image: "/vorvKP5QehliJ91ZUFlUbcInzcB.jpg",
        platforms: {
          imdbMovie: {
            rating: 5.6,
          },
        },
      },
      {
        name: "Til døden os skiller",
        image: "/5na7fVYstlDRLtPC1lEAlJOXRZJ.jpg",
        platforms: {
          imdbMovie: {
            rating: 5.6,
          },
        },
      },
      {
        name: "Zipi y Zape y el club de la canica",
        image: "/9l1PKshalf5H9Phc0lyyUWEeEa5.jpg",
        platforms: {
          imdbMovie: {
            rating: 5.5,
          },
        },
      },
      {
        name: "Vuelta al insti",
        image: "/hGlpctlRkYqcfFxbNqmz8flQfRy.jpg",
        platforms: {
          imdbMovie: {
            rating: 5.5,
          },
        },
      },
      {
        name: "Been so long: Y todo cambió",
        image: "/teKQO4aJgqulbDgyEm5bC9jo6Gj.jpg",
        platforms: {
          imdbMovie: {
            rating: 5.5,
          },
        },
      },
      {
        name: "Żyć nie umierać",
        image: "/alPxr78leBORSbqOEKh52hOeeKP.jpg",
        platforms: {
          imdbMovie: {
            rating: 5.5,
          },
        },
      },
      {
        name: "Vampire Academy",
        image: "/tJWnz4L2kI5Z83QfCrdRn6sEjqD.jpg",
        platforms: {
          imdbMovie: {
            rating: 5.4,
          },
        },
      },
      {
        name: "Women in Rock",
        image: "/crz8aXBCePJ9ewC7mtOXDctZuk9.jpg",
        platforms: {
          imdbMovie: {
            rating: 5.4,
          },
        },
      },
      {
        name: "Up North",
        image: "/8Jwde1BZI8jYmHpVj0MtiePl7fg.jpg",
        platforms: {
          imdbMovie: {
            rating: 5.4,
          },
        },
      },
      {
        name: "Youtopia",
        image: "/ufQtvkdhav13QsOniD2LkRYwuhd.jpg",
        platforms: {
          imdbMovie: {
            rating: 5.3,
          },
        },
      },
      {
        name: "Yo, 'El Vaquilla'",
        image: "/pHDAAxivYSJQ82pUItkrTwbdtV2.jpg",
        platforms: {
          imdbMovie: {
            rating: 5.3,
          },
        },
      },
      {
        name: "Wolf Warrior",
        image: "/agNIS9w1qYb81VOEqhMvskFrv2T.jpg",
        platforms: {
          imdbMovie: {
            rating: 5.3,
          },
        },
      },
      {
        name: "Zavera",
        image: "/gbAvBTwHuBzDkK1Fy1puuIe4PMU.jpg",
        platforms: {
          imdbMovie: {
            rating: 4.7,
          },
        },
      },
      {
        name: "Una Segunda Oportunidad ¡Rivales!",
        image: "/egTUn0oodsHa6gC9XXux40eSAhQ.jpg",
        platforms: {
          imdbMovie: {
            rating: 4.7,
          },
        },
      },
      {
        name: "Villaviciosa de al lado",
        image: "/7kWOLgs9gbfGlvM2KDXfuUIML3I.jpg",
        platforms: {
          imdbMovie: {
            rating: 4.6,
          },
        },
      },
      {
        name: "Y al séptimo día",
        image: "/yQCHNW14s8tJBUOiHFoNWKFvrdA.jpg",
        platforms: {
          imdbMovie: {
            rating: 4.5,
          },
        },
      },
      {
        name: "Venganza a golpes",
        image: "/1pOdSYjmnX61Nh9sMyztwnPJe98.jpg",
        platforms: {
          imdbMovie: {
            rating: 4.4,
          },
        },
      },
      {
        name: "Y'a un os dans la moulinette",
        image: "/eKN3JVx9uCbnB3KN0YGfCm9m6ig.jpg",
        platforms: {
          imdbMovie: {
            rating: 4.3,
          },
        },
      },
      {
        name: "Vampyres",
        image: "/yRzaIDreRU4p0XBX2LV588UtW0K.jpg",
        platforms: {
          imdbMovie: {
            rating: 3.2,
          },
        },
      },
      {
        name: "Una relación peligrosa",
        image: "/xvSGtwywhtQQuITzMf8qH8oQ8m7.jpg",
        platforms: {
          imdbMovie: {
            rating: 2.6,
          },
        },
      },
      {
        name: "Zenek",
        image: "/yYUq5Dfcpkc0f8WJeMgTMeRXTil.jpg",
        platforms: {
          imdbMovie: {
            rating: 2.6,
          },
        },
      },
    ]);
  };
  return (
    <Box
      sx={{
        backgroundColor: "#3d3d3d",
        display: "flex",
        justifyContent: "center",
        width: "100%",
      }}
    >
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "calc(50% - 10px) calc(50% - 10px)",
          columnGap: "20px",
          rowGap: "20px",
          width: "calc(100% - 40px)",
        }}
      >
        {movies.map((movie) => (
          <Box key={movie.id} sx={{ position: "relative" }}>
            <CardMedia
              component="img"
              sx={{ width: "100%", border: "1px solid white" }}
              image={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${movie.image}`}
              alt={movie.name}
            />
            <Box
              sx={{
                width: "94px",
                height: "30px",
                position: "absolute",
                left: "calc(50% - 47px)",
                bottom: "-5px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  width: "60px",
                  height: "30px",
                  backgroundColor: "#F6C700",
                  height: "100%",
                  borderRadius: "5px",
                  zIndex: "1",
                  position: "relative",
                }}
              >
                <Image
                  component="img"
                  src={IMDB_CHIP_ICON}
                  alt="IMDB RANK"
                  layout="fill"
                />
              </Box>
              <Box
                sx={{
                  backgroundColor: "#000",
                  height: "100%",
                  width: "100%",
                  borderRadius: "5px",
                  position: "absolute",
                  right: "0px",
                }}
              ></Box>
              <Typography
                className={inter.className}
                sx={{
                  color: "#F6C700",
                  height: "fit-content",
                  width: "fit-content",
                  right: "4px",
                  position: "absolute",
                }}
              >
                {movie.platforms.imdbMovie.rating % 1 != 0
                  ? movie.platforms.imdbMovie.rating
                  : `${movie.platforms.imdbMovie.rating}.0`}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default MovieGallery;

// coses a fer
/*
    arreglar filmaffinity
    posar nom vots a imdb
    fer chip filmaffinity

    slider de num vots 
    slider de minim nota

    tornar a galeria


 */
