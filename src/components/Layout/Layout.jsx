import {Header} from '../Header/Header';
import {Footer} from '../Footer/Footer';

export const Layout = (props) => {
	return <div>
		<Header />
		{props.children}
		<Footer></Footer>
	</div>
}