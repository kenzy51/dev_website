import Link from "next/link";
import NavbarTwo from "../../../components/_App/NavbarTwo";
import DashboardNavbar from "../../../components/Dashboard/DashboardNavbar";
import ProfileArea from "../../../components/Dashboard/Profile/ProfileArea";
const avatar = '../images/avatar.png';

const Profile = ({ user }) => {
	return (
		<>
			<DashboardNavbar />

			<div className="main-content d-flex flex-column">

				<NavbarTwo userRole={user} />

				<div className="breadcrumb-area">
					<h1>My Profile</h1>
					<ol className="breadcrumb">
						<li className="item">
							<Link href="/dashboard">
								<a>Home</a>
							</Link>
						</li>
						<li className="item">
							<Link href="/dashboard">
								<a>Dashboard</a>
							</Link>
						</li>
						<li className="item">My Profile</li>
					</ol>
				</div>

				{/* Profile Area */}

				<ProfileArea 
					user={user} 
					avatar={avatar}
				/>

				<div className="flex-grow-1"></div>

				<div className="copyrights-area">
					<div className="row align-items-center">
						<div className="col-lg-6 col-sm-6 col-md-6">
							<p>
								<i className="bx bx-copyright"></i> Indice All rights reserved
							</p>
						</div>

						<div className="col-lg-6 col-sm-6 col-md-6 text-right">
							<p>
								Designed by ❤️{" "}
								<a
									href="https://envytheme.com/"
									target="_blank"
									rel="noreferrer"
								>
									EnvyTheme
								</a>
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Profile;
