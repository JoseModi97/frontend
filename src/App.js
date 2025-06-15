import { Routes, Route } from 'react-router-dom';

import IndexLayout from 'layouts/IndexLayout';
import MainLayout from 'layouts/MainLayout';
import AlbumList from 'pages/album/List';
import AlbumView from 'pages/album/View';
import AlbumAdd from 'pages/album/Add';
import AlbumEdit from 'pages/album/Edit';
import ArtistList from 'pages/artist/List';
import ArtistView from 'pages/artist/View';
import ArtistAdd from 'pages/artist/Add';
import ArtistEdit from 'pages/artist/Edit';
import CustomerList from 'pages/customer/List';
import CustomerView from 'pages/customer/View';
import CustomerAdd from 'pages/customer/Add';
import CustomerEdit from 'pages/customer/Edit';
import EmployeeList from 'pages/employee/List';
import EmployeeView from 'pages/employee/View';
import EmployeeAdd from 'pages/employee/Add';
import EmployeeEdit from 'pages/employee/Edit';
import GenreList from 'pages/genre/List';
import GenreView from 'pages/genre/View';
import GenreAdd from 'pages/genre/Add';
import GenreEdit from 'pages/genre/Edit';
import InvoiceList from 'pages/invoice/List';
import InvoiceView from 'pages/invoice/View';
import InvoiceAdd from 'pages/invoice/Add';
import InvoiceEdit from 'pages/invoice/Edit';
import InvoicelineList from 'pages/invoiceline/List';
import InvoicelineView from 'pages/invoiceline/View';
import InvoicelineAdd from 'pages/invoiceline/Add';
import InvoicelineEdit from 'pages/invoiceline/Edit';
import MediatypeList from 'pages/mediatype/List';
import MediatypeView from 'pages/mediatype/View';
import MediatypeAdd from 'pages/mediatype/Add';
import MediatypeEdit from 'pages/mediatype/Edit';
import PlaylistList from 'pages/playlist/List';
import PlaylistView from 'pages/playlist/View';
import PlaylistAdd from 'pages/playlist/Add';
import PlaylistEdit from 'pages/playlist/Edit';
import PlaylisttrackList from 'pages/playlisttrack/List';
import PlaylisttrackView from 'pages/playlisttrack/View';
import PlaylisttrackAdd from 'pages/playlisttrack/Add';
import PlaylisttrackEdit from 'pages/playlisttrack/Edit';
import TrackList from 'pages/track/List';
import TrackView from 'pages/track/View';
import TrackAdd from 'pages/track/Add';
import TrackEdit from 'pages/track/Edit';
import UserList from 'pages/user/List';
import UserView from 'pages/user/View';
import UserAdd from 'pages/user/Add';
import UserEdit from 'pages/user/Edit';
import HomePage from './pages/home/HomePage';
import IndexPages from './pages/index';
import ErrorPages from './pages/errors';
import 'primereact/resources/primereact.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import 'assets/styles/layout.scss';
const App = () => {
	return (
		<Routes>
			<Route element={<MainLayout />}>
				<Route path="/" element={<HomePage />} />
				<Route path="/home" element={<HomePage />} />
				

				{/* album pages routes */}
				<Route path="/album" element={<AlbumList />} />
				<Route path="/album/:fieldName/:fieldValue" element={<AlbumList />} />
				<Route path="/album/index/:fieldName/:fieldValue" element={<AlbumList />} />
				<Route path="/album/view/:pageid" element={<AlbumView />} />
				<Route path="/album/add" element={<AlbumAdd />} />
				<Route path="/album/edit/:pageid" element={<AlbumEdit />} />

				{/* artist pages routes */}
				<Route path="/artist" element={<ArtistList />} />
				<Route path="/artist/:fieldName/:fieldValue" element={<ArtistList />} />
				<Route path="/artist/index/:fieldName/:fieldValue" element={<ArtistList />} />
				<Route path="/artist/view/:pageid" element={<ArtistView />} />
				<Route path="/artist/add" element={<ArtistAdd />} />
				<Route path="/artist/edit/:pageid" element={<ArtistEdit />} />

				{/* customer pages routes */}
				<Route path="/customer" element={<CustomerList />} />
				<Route path="/customer/:fieldName/:fieldValue" element={<CustomerList />} />
				<Route path="/customer/index/:fieldName/:fieldValue" element={<CustomerList />} />
				<Route path="/customer/view/:pageid" element={<CustomerView />} />
				<Route path="/customer/add" element={<CustomerAdd />} />
				<Route path="/customer/edit/:pageid" element={<CustomerEdit />} />

				{/* employee pages routes */}
				<Route path="/employee" element={<EmployeeList />} />
				<Route path="/employee/:fieldName/:fieldValue" element={<EmployeeList />} />
				<Route path="/employee/index/:fieldName/:fieldValue" element={<EmployeeList />} />
				<Route path="/employee/view/:pageid" element={<EmployeeView />} />
				<Route path="/employee/add" element={<EmployeeAdd />} />
				<Route path="/employee/edit/:pageid" element={<EmployeeEdit />} />

				{/* genre pages routes */}
				<Route path="/genre" element={<GenreList />} />
				<Route path="/genre/:fieldName/:fieldValue" element={<GenreList />} />
				<Route path="/genre/index/:fieldName/:fieldValue" element={<GenreList />} />
				<Route path="/genre/view/:pageid" element={<GenreView />} />
				<Route path="/genre/add" element={<GenreAdd />} />
				<Route path="/genre/edit/:pageid" element={<GenreEdit />} />

				{/* invoice pages routes */}
				<Route path="/invoice" element={<InvoiceList />} />
				<Route path="/invoice/:fieldName/:fieldValue" element={<InvoiceList />} />
				<Route path="/invoice/index/:fieldName/:fieldValue" element={<InvoiceList />} />
				<Route path="/invoice/view/:pageid" element={<InvoiceView />} />
				<Route path="/invoice/add" element={<InvoiceAdd />} />
				<Route path="/invoice/edit/:pageid" element={<InvoiceEdit />} />

				{/* invoiceline pages routes */}
				<Route path="/invoiceline" element={<InvoicelineList />} />
				<Route path="/invoiceline/:fieldName/:fieldValue" element={<InvoicelineList />} />
				<Route path="/invoiceline/index/:fieldName/:fieldValue" element={<InvoicelineList />} />
				<Route path="/invoiceline/view/:pageid" element={<InvoicelineView />} />
				<Route path="/invoiceline/add" element={<InvoicelineAdd />} />
				<Route path="/invoiceline/edit/:pageid" element={<InvoicelineEdit />} />

				{/* mediatype pages routes */}
				<Route path="/mediatype" element={<MediatypeList />} />
				<Route path="/mediatype/:fieldName/:fieldValue" element={<MediatypeList />} />
				<Route path="/mediatype/index/:fieldName/:fieldValue" element={<MediatypeList />} />
				<Route path="/mediatype/view/:pageid" element={<MediatypeView />} />
				<Route path="/mediatype/add" element={<MediatypeAdd />} />
				<Route path="/mediatype/edit/:pageid" element={<MediatypeEdit />} />

				{/* playlist pages routes */}
				<Route path="/playlist" element={<PlaylistList />} />
				<Route path="/playlist/:fieldName/:fieldValue" element={<PlaylistList />} />
				<Route path="/playlist/index/:fieldName/:fieldValue" element={<PlaylistList />} />
				<Route path="/playlist/view/:pageid" element={<PlaylistView />} />
				<Route path="/playlist/add" element={<PlaylistAdd />} />
				<Route path="/playlist/edit/:pageid" element={<PlaylistEdit />} />

				{/* playlisttrack pages routes */}
				<Route path="/playlisttrack" element={<PlaylisttrackList />} />
				<Route path="/playlisttrack/:fieldName/:fieldValue" element={<PlaylisttrackList />} />
				<Route path="/playlisttrack/index/:fieldName/:fieldValue" element={<PlaylisttrackList />} />
				<Route path="/playlisttrack/view/:pageid" element={<PlaylisttrackView />} />
				<Route path="/playlisttrack/add" element={<PlaylisttrackAdd />} />
				<Route path="/playlisttrack/edit/:pageid" element={<PlaylisttrackEdit />} />

				{/* track pages routes */}
				<Route path="/track" element={<TrackList />} />
				<Route path="/track/:fieldName/:fieldValue" element={<TrackList />} />
				<Route path="/track/index/:fieldName/:fieldValue" element={<TrackList />} />
				<Route path="/track/view/:pageid" element={<TrackView />} />
				<Route path="/track/add" element={<TrackAdd />} />
				<Route path="/track/edit/:pageid" element={<TrackEdit />} />

				{/* user pages routes */}
				<Route path="/user" element={<UserList />} />
				<Route path="/user/:fieldName/:fieldValue" element={<UserList />} />
				<Route path="/user/index/:fieldName/:fieldValue" element={<UserList />} />
				<Route path="/user/view/:pageid" element={<UserView />} />
				<Route path="/user/add" element={<UserAdd />} />
				<Route path="/user/edit/:pageid" element={<UserEdit />} />
			</Route>
			<Route exact element={<IndexLayout />}>
				<Route path="/*" element={<IndexPages />} />
				<Route path="/error/*" element={<ErrorPages />} />
			</Route>
		</Routes>
	);
}
export default App;
