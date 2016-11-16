import React from 'react';
import {
	Appear,
	Deck,
	Heading,
	Image,
	Link,
	ListItem,
	List,
	Slide,
	Spectacle,
} from 'spectacle';
import preloader from 'spectacle/lib/utils/preloader';
import createTheme from 'spectacle/lib/themes/default';
import CodeSlide from 'spectacle-code-slide';
import 'normalize.css';
import 'spectacle/lib/themes/default/index.css';

// images
import arduino from '../assets/arduino.png';
import plug from '../assets/plug.gif';
import exams from '../assets/exams.gif';
import joker from '../assets/joker.gif';
import badass from '../assets/badass.gif';
import demo from '../assets/demo.gif';
import alignement from '../assets/alignement.gif';
import ladder from '../assets/ladder.gif';
import flex from '../assets/flex.gif';
import clap from '../assets/clap.gif';

// code
import helloWorld from '../assets/helloworld.example';
import button from '../assets/button.example';
import talk from '../assets/talk.example';
import processing from '../assets/processing.example';

preloader({
	arduino,
	plug,
	exams,
	badass,
	demo,
	alignement,
	ladder,
	flex,
	clap,
});

const theme = createTheme({
	primary: '#00796B',
});

const Presentation = () => (
	<Spectacle theme={theme}>
		<Deck transition={['zoom', 'fade']} transitionDuration={500}>
			<Slide bgColor="primary">
				<Heading size={1} fit caps lineHeight={1} textColor="black">
					Arduino
				</Heading>
				<Heading size={1} fit caps>
					c'est bien!
				</Heading>
				<Heading size={1} fit caps textColor="black">
					mangez-en!
				</Heading>
			</Slide>
			<Slide bgColor="primary">
				<Image src={arduino} margin="0px auto 40px" height="293px" />
				<Heading size={2} caps fit>
					Arduino, petit mais puissant!
				</Heading>
			</Slide>
			<Slide bgColor="primary">
				<Heading size={1} fit caps lineHeight={1} textColor="white">
					Arduino, kézako?
				</Heading>
				<List>
					<Appear><ListItem>Circuit imprimé open source autour d'un microcontrôleur programmable</ListItem></Appear>
					<Appear><ListItem>Des entrées et sorties permettant de connecter des capteurs, actionneus, etc.</ListItem></Appear>
					<Appear><ListItem>Un environnement de développement dérivé de celui de Processing</ListItem></Appear>
					<Appear><ListItem>S'interfacer avec le monde réel</ListItem></Appear>
					<Appear><ListItem><Link href="http://arduino.cc/" target="_blank">http://arduino.cc/</Link></ListItem></Appear>
				</List>
			</Slide>
			<Slide bgColor="primary">
				<Heading size={1} fit caps lineHeight={1} textColor="white">
					Que faire avec?
				</Heading>
				<List>
					<Appear><ListItem>des objets connectés</ListItem></Appear>
					<Appear><ListItem>des robots</ListItem></Appear>
					<Appear><ListItem>des machines à dessins</ListItem></Appear>
					<Appear><ListItem>des jardins autonomes</ListItem></Appear>
					<Appear><ListItem>des expositions</ListItem></Appear>
					<Appear><ListItem>etc.</ListItem></Appear>
					<Appear><ListItem>etc.</ListItem></Appear>
					<Appear><ListItem>etc.</ListItem></Appear>
					<Appear><ListItem>c'est inifini!</ListItem></Appear>
				</List>
			</Slide>
			<Slide bgColor="primary">
				<Image src={demo} margin="0px auto 40px" height="293px" />
				<Heading size={2} caps fit>
					Demos!
				</Heading>
			</Slide>
			<Slide bgColor="primary">
				<iframe width="800" height="450" src="https://www.youtube.com/embed/TioYIJhdaKo" frameBorder="0" />
			</Slide>
			<Slide bgColor="primary">
				<iframe width="800" height="450" src="https://player.vimeo.com/video/99613546?color=ffffff&title=0&byline=0&portrait=0" frameBorder="0" />
			</Slide>
			<Slide bgColor="primary">
				<iframe width="800" height="450" src="https://player.vimeo.com/video/68530396?color=ffffff&title=0&byline=0&portrait=0" frameBorder="0" />
			</Slide>
			<Slide bgColor="primary">
				<iframe width="800" height="450" src="https://player.vimeo.com/video/126355254?color=ffffff&title=0&byline=0&portrait=0" frameBorder="0" />
			</Slide>

			<Slide bgColor="primary">
				<Image src={plug} margin="0px auto 40px" height="293px" />
				<Heading size={2} caps fit>
					Arduino se connecte à tout!
				</Heading>
			</Slide>
			<Slide bgColor="primary">
				<Heading size={1} fit caps lineHeight={1} textColor="white">
					Une liste non exhaustive de capteurs
				</Heading>
				<List>
					<Appear><ListItem><Link href="http://www.libelium.com/products/waspmote/sensors/">http://www.libelium.com/products/waspmote/sensors/</Link></ListItem></Appear>
					<Appear><ListItem><Link href="https://www.sparkfun.com/categories/23?page=all">https://www.sparkfun.com/categories/23?page=all</Link></ListItem></Appear>
					<Appear><ListItem>et tellement plus.</ListItem></Appear>
				</List>
			</Slide>
			<Slide bgColor="primary">
				<Heading size={1} fit caps lineHeight={1} textColor="white">
					Une liste non exhaustive des "shields"
				</Heading>
				<List>
					<Appear><ListItem>Un "shield" est une carte d'extension que l'on enfiche sur l'arduino afin de lui rajouter des fonctionalités</ListItem></Appear>
					<Appear><ListItem><Link href="https://www.sparkfun.com/categories/240?page=all">https://www.sparkfun.com/categories/240?page=all</Link></ListItem></Appear>
					<Appear><ListItem><Link href="https://www.adafruit.com/category/21">https://www.adafruit.com/category/21</Link></ListItem></Appear>
					<Appear><ListItem>et tellement plus.</ListItem></Appear>
				</List>
			</Slide>
			<Slide bgColor="primary">
				<Heading size={1} fit caps lineHeight={1} textColor="white">
					Une liste non exhaustive de modes de communication
				</Heading>
				<List>
					<Appear><ListItem>WiFi</ListItem></Appear>
					<Appear><ListItem>Bluetooth</ListItem></Appear>
					<Appear><ListItem>MIDI</ListItem></Appear>
					<Appear><ListItem>DMX</ListItem></Appear>
					<Appear><ListItem>RF 433MHz</ListItem></Appear>
					<Appear><ListItem>Réseau téléphoniques</ListItem></Appear>
					<Appear><ListItem>NFC</ListItem></Appear>
					<Appear><ListItem>et tellement plus.</ListItem></Appear>
				</List>
			</Slide>
			<Slide bgColor="primary">
				<Image src={exams} margin="0px auto 40px" height="293px" />
				<Heading size={2} caps fit>
					Votre premier programme arduino!
				</Heading>
			</Slide>
			<CodeSlide
				transition={[]}
				lang="clike"
				code={helloWorld}
				ranges={[
					{ loc: [0, 3], note: 'Ce code s\'exécute une seule fois, à la mise sous tension de la carte' },
					{ loc: [4, 10], note: 'Ce code s\'exécute en boucle, aussi vite qu\'il peut' },
					{ loc: [1, 2], note: 'Je déclare que la "pin" n°13 sera de type "sortie"' },
					{ loc: [5, 6], note: 'J\'applique une tension de 5v à la "pin" n°13' },
					{ loc: [6, 7], note: 'J\'attends 500ms' },
					{ loc: [7, 8], note: 'J\'applique une tension de 0v à la "pin" n°13' },
					{ loc: [8, 9], note: 'J\'attends 500ms' },
				]}
			/>
			<Slide bgColor="primary">
				<Image src={ladder} margin="0px auto 40px" height="293px" />
				<Heading size={2} caps fit>
					Se documenter sur arduino
				</Heading>
			</Slide>
			<Slide bgColor="primary">
				<Heading size={1} fit caps lineHeight={1} textColor="white">
					Read the fucking manual!
				</Heading>
				<List>
					<Appear><ListItem><Link href="https://www.arduino.cc/en/Guide/HomePage">https://www.arduino.cc/en/Guide/HomePage</Link></ListItem></Appear>
					<Appear><ListItem><Link href="https://www.arduino.cc/en/Tutorial/HomePage">https://www.arduino.cc/en/Tutorial/HomePage</Link></ListItem></Appear>
					<Appear><ListItem><Link href="https://www.arduino.cc/en/Reference/HomePage">https://www.arduino.cc/en/Reference/HomePage</Link></ListItem></Appear>
				</List>
			</Slide>
			<Slide bgColor="primary">
				<Image src={demo} margin="0px auto 40px" height="293px" />
				<Heading size={2} caps fit>
					Allumer la led lorsque l'on appuie sur le bouton!
				</Heading>
			</Slide>
			<CodeSlide
				transition={[]}
				lang="clike"
				code={button}
				ranges={[
					{ loc: [2, 3], note: 'Je déclare que la "pin" n°2 sera de type "entrée"' },
					{ loc: [6, 7], note: 'Je lis la tension sur la "pin" n°2' },
					{ loc: [7, 8], note: 'Si le bouton est appuyé' },
					{ loc: [8, 9], note: 'Alors, j\'allume la led' },
					{ loc: [11, 12], note: 'Sinon, j\'éteint la led' },
				]}
			/>
			<Slide bgColor="primary">
				<Image src={clap} margin="0px auto 40px" height="293px" />
				<Heading size={2} caps fit>
					Parler avec l'arduino
				</Heading>
			</Slide>
			<CodeSlide
				transition={[]}
				lang="clike"
				code={talk}
				ranges={[
					{ loc: [0, 1], note: '"pin" sur laquelle sera connectée la led' },
					{ loc: [3, 4], note: 'Démarrer la connection série à la vitesse de 9600 bauds' },
					{ loc: [9, 10], note: 'Des données sont disponibles sur le port série' },
					{ loc: [10, 11], note: 'Lire ces données' },
					{ loc: [11, 12], note: 'Agir selon les données lues' },
					{ loc: [0, 19], note: 'Le code entier' },
				]}
			/>
			<Slide bgColor="primary">
				<Image src={clap} margin="0px auto 40px" height="293px" />
				<Heading size={2} caps fit>
					Parler avec l'arduino depuis Processing
				</Heading>
			</Slide>
			<CodeSlide
				transition={[]}
				lang="clike"
				code={processing}
				ranges={[
					{ loc: [6, 7], note: 'Récupérer le premier des ports série' },
					{ loc: [7, 8], note: 'Ouvrir le port' },
					{ loc: [11, 12], note: 'Ecrire 1 sur le port' },
					{ loc: [15, 16], note: 'Ecrire 0 sur le port' },
					{ loc: [0, 19], note: 'Le code entier' },
				]}
			/>
			<Slide bgColor="primary">
				<Image src={joker} margin="0px auto 40px" height="293px" />
				<Heading size={2} caps fit>
					A vous de jouer!
				</Heading>
			</Slide>
			<Slide bgColor="primary">
				<Heading size={1} fit caps lineHeight={1} textColor="white">
					Place à l'expérimentation
				</Heading>
				<List>
					<Appear><ListItem>Envoyer des données de l'Arduino à Processing</ListItem></Appear>
					<Appear><ListItem>Utiliser un potentiomètre pour modifier la couleur d'un sketch Processing</ListItem></Appear>
					<Appear><ListItem>Utiliser d'autres capteurs</ListItem></Appear>
					<Appear><ListItem>etc.</ListItem></Appear>
				</List>
			</Slide>
		</Deck>
	</Spectacle>
);

export default Presentation;
