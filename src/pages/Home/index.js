import logo from '../../logo.svg';
import logoS3 from '../../logoS3.png';
import logoCF from '../../logoCloudFront.png';
import './index.css';
import { useFetch } from "react-async"

// To be replaced by the endpoint of the API deployed through the CloudFormation Template
const APIEndPoint = 'to be replaced with your api endpoint here'

function Home() {
  return (
    <div className="Home">
        <header className="Home-header">
          {APIEndPoint.startsWith('http') &&
            <APIResult />
          }
          <img src={logo} className="Home-MainLogo" alt="logo" />
        </header>
        <p>This react-based application is hosted in an S3 bucket exposed through a CloudFront distribution</p>
        <div className="logos">
            <img src={logoS3} className="Home-logoR2L" alt="logo S3" />
            <img src={logoCF} className="Home-logoL2R" alt="logo CloudFront" />
        </div>
    </div>
  );
}

const APIResult = () => {
  const { data, error } = useFetch(APIEndPoint, {
    headers: { accept: "application/json" },
  })
  if (error) return <p>{error.message}</p>
  if (data) return <p>{data.message}</p>
  return null
}

export default Home;
