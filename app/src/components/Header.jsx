import { styled, Typography } from '@mui/material/';

import { HideOnScroll } from '../utils';

const Wrapper = styled('header')(({ theme }) => ({
	height: '70vh',
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
	alignItems: 'center',
	position: 'relative',
	overflow: 'hidden',
}));

const BackgroundImage = styled('div')(({ theme }) => ({
	opacity: 1,
	position: 'absolute',
	top: 0,
	left: 0,
	width: '100%',
	height: '100%',
	backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0) 0%, ${theme.palette.background.default} 100%), url(https://picsum.photos/720/480)`,
	backgroundRepeat: 'no-repeat',
	backgroundPosition: 'center',
	backgroundSize: 'cover',
	transitionProperty: 'opacity',
	transitionDuration: theme.transitions.duration.complex,
	transitionTimingFunction: theme.transitions.easing.easeInOut,
}));

const HGroup = styled('hgroup')(({ theme }) => ({
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
	alignItems: 'center',
	textAlign: 'center',
	zIndex: '1',
	padding: theme.spacing(2),
}));

export default function Header() {
	// const [imageLoaded, setImageLoaded] = useState(false);

	// load image on pageload
	// useEffect(() => {
	// 	// const { imageSrc } = props;

	// 	const image = new Image();
	// 	image.src = 'https://picsum.photos/id/1080/720/480';

	// 	image.onload = () => {
	// 		setImageLoaded(true);
	// 	};
	// }, []);

	return (
		<Wrapper>
			<BackgroundImage />
			<HideOnScroll threshold={(15 / 100) * window.innerHeight}>
				<HGroup>
					<Typography
						variant="h1"
						sx={{
							marginBottom: 2,
							marginTop: -2,
							'@media (max-width: 387px)': { fontSize: '2.8rem' },
						}}
					>
						VEGANISE IT
					</Typography>
					<Typography
						variant="h3"
						component="h2"
						sx={{
							display: { mobile: 'none', tablet: 'block' },
							'@media (max-width: 850px)': { display: 'none' },
						}}
					>
						🧑‍🍳 Your favourite recipes. Made with plants 🌱
					</Typography>
					<Typography
						variant="h3"
						component="h2"
						sx={{
							display: 'none',
							'@media (min-width: 387px) and (max-width: 850px)': {
								display: 'block',
							},
						}}
					>
						Your favourite recipes.
						<br />
						🧑‍🍳 Made with plants 🌱
					</Typography>
				</HGroup>
			</HideOnScroll>
		</Wrapper>
	);
}
