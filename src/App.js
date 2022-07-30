
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home2'
import Fmodule from './Fmoduls/Fmodule';
import Arlstm from './Fmoduls/ARLSTM/Arlstm';
import ArlstmWeek from './Fmoduls/ARLSTM/arlstmPages/ArlstmWeek';
import ArlstmMonth from './Fmoduls/ARLSTM/arlstmPages/ArlstmMonth';
import ArlstmSixMonth from './Fmoduls/ARLSTM/arlstmPages/ArlstmSixMonth';
import ArlstmYear from './Fmoduls/ARLSTM/arlstmPages/ArlstmYear';
import ArlstmFiveYear from './Fmoduls/ARLSTM/arlstmPages/ArlstmFiveYear';

import CovnetWeek from './Fmoduls/covnet/covnetPages/CovnetWeek';
import CovnetMonth from './Fmoduls/covnet/covnetPages/CovnetMonth';
import CovnetSixMonth from './Fmoduls/covnet/covnetPages/CovnetSixMonth';
import CovnetYear from './Fmoduls/covnet/covnetPages/CovnetYear';
import CovnetFiveYear from './Fmoduls/covnet/covnetPages/CovnetFiveYear';

import ArlstmCovnetWeek from './Fmoduls/arlstm&covnet/arlstm&covnetPages/ArlstmCovnetWeek';
import ArlstmCovnetMonth from './Fmoduls/arlstm&covnet/arlstm&covnetPages/ArlstmCovnetMonth';
import ArlstmCovnetSixMonth from './Fmoduls/arlstm&covnet/arlstm&covnetPages/ArlstmCovnetSixMonth';
import ArlstmCovnetYear from './Fmoduls/arlstm&covnet/arlstm&covnetPages/ArlstmCovnetYear';
import ArlstmCovnetFiveYear from './Fmoduls/arlstm&covnet/arlstm&covnetPages/ArlstmCovnetFiveYear';

import ArlstmCovnetLstmTtvWeek from './Fmoduls/arlstmlstmcovnetttv/arlstmcovnetlstmttvPages/ArlstmCovnetLstmTtvWeek';
import ArlstmCovnetLstmTtvMonth from './Fmoduls/arlstmlstmcovnetttv/arlstmcovnetlstmttvPages/ArlstmCovnetLstmTtvMonth';
import ArlstmCovnetLstmTtvSixMonth from './Fmoduls/arlstmlstmcovnetttv/arlstmcovnetlstmttvPages/ArlstmCovnetLstmTtvSixMonth';
import ArlstmCovnetLstmTtvYear from './Fmoduls/arlstmlstmcovnetttv/arlstmcovnetlstmttvPages/ArlstmCovnetLstmTtvYear';
import ArlstmCovnetLstmTtvFiveYear from './Fmoduls/arlstmlstmcovnetttv/arlstmcovnetlstmttvPages/ArlstmCovnetLstmTtvFiveYear';

import ArlstmCovnetLstmTtvTttvWeek from './Fmoduls/arlstmlstmcovnetttvttv/arlstmcovnetlstmttvtttvPages/ArlstmCovnetLstmTtvTttvWeek';
import ArlstmCovnetLstmTtvTttvMonth from './Fmoduls/arlstmlstmcovnetttvttv/arlstmcovnetlstmttvtttvPages/ArlstmCovnetLstmTtvTttvMonth';
import ArlstmCovnetLstmTtvTttvSixMonth from './Fmoduls/arlstmlstmcovnetttvttv/arlstmcovnetlstmttvtttvPages/ArlstmCovnetLstmTtvTttvSixMonth';
import ArlstmCovnetLstmTtvTttvYear from './Fmoduls/arlstmlstmcovnetttvttv/arlstmcovnetlstmttvtttvPages/ArlstmCovnetLstmTtvTttvYear';
import ArlstmCovnetLstmTtvTttvFiveYear from './Fmoduls/arlstmlstmcovnetttvttv/arlstmcovnetlstmttvtttvPages/ArlstmCovnetLstmTtvTttvFiveYear';
import Iomodule from './iomodule/Iomodule';
import Input from './iomodule/input/Input';
import Output from './iomodule/output/Output';
import Ocovnet from './iomodule/output/ocovnet/Ocovnet';
import Olstm from './iomodule/output/olastm/Olstm';
import Otttv from './iomodule/output/otttv/Otttv';
import Oarlstm from './iomodule/output/oarlstm/Oarlstm';
import Ottv from './iomodule/output/ottv/Ottv';

import Olstmcovnetarlstm from './iomodule/output/lstmcovnetarlstm/Olstmcovnetarlstm';
import Oarlstmcovnetttv from './iomodule/output/arlstmcovnetttv/Oarlstmcovnetttv';
import Ocovnetttvtttv from './iomodule/output/covnetttvtttv/Ocovnetttvtttv';
import Olstmarlstmtttv from './iomodule/output/lstmarlstmtttv/Olstmarlstmtttv';
import Olstmcovnetttv from './iomodule/output/lstmcovnetttv/Olstmcovnetttv';
import Olstmcovnettttv from './iomodule/output/lstmcovnettttv/Olstmcovnettttv';

import Olstmcovnet from './iomodule/output/lstmcovnet/Olstmcovnet';
import Olstmarlstm from './iomodule/output/lstmarlstm/Olstmarlstm';
import Oarlstmcovnet from './iomodule/output/arlstmcovnet/Oarlstmcovnet';
import Ottvtttv from './iomodule/output/ttvtttv/Ottvtttv';
import Olstmttv from './iomodule/output/lstmttv/Olstmttv';
import Olstmtttv from './iomodule/output/lstmtttv/Olstmtttv';
import Oarlstmttv from './iomodule/output/arlstmttv/Oarlstttv';
import Oarlstmtttv from './iomodule/output/arlstmtttv/Oarlsttttv';
import Ocovnettttv from './iomodule/output/covnettttv/Ocovnettttv';
import Olstmttvtttv from './iomodule/output/lstmttvtttv/Olstmttvtttv';

import Olstmarlstmcovnetttv from './iomodule/output/lastmarlstmcovnetttv/Olstmarlstmcovnetttv';

import Oarlstmcovnetttvtttv from './iomodule/output/arlstmcovnetttvtttv/Oarlstmcovnetttvtttv';
import Olstmarlstmttvtttv from './iomodule/output/lastmarlstmttvtttv/Olstmarlstmttvtttv';
import Olstmcovnetttvtttv from './iomodule/output/lstmcovnetttvtttv/Olstmcovnetttvtttv';
import Fetch from './iomodule/output/Fetch';
import Ocovnetttv from './iomodule/output/covnetttv/Ocovnetttv';
import Olstmarlstmttv from './iomodule/output/lstmarlstmttv/Olstmarlstmttv';
import Fetch2 from './iomodule/output/Fetch2';

import Olstmarlstmcovnetttvtttv from './iomodule/output/lstmarlstmcovnetttvtttv/Olstmarlstmcovnetttvtttv';
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          {/* <Route exact path='/chart' element={<Analytics />} /> */}
          <Route exact path='/home' element={<Home />} />
          <Route exact path='/module' element={<Fmodule />} />
          <Route exact path='/arlstmweek' element={<ArlstmWeek />} />
          <Route exact path='/arlstmmonth' element={<ArlstmMonth />} />
          <Route exact path='/arlstmsixmonth' element={<ArlstmSixMonth />} />
          <Route exact path='/arlstmyear' element={<ArlstmYear />} />
          <Route exact path='/arlstmfiveyear' element={<ArlstmFiveYear />} />

          <Route exact path='/covnetweek' element={<CovnetWeek />} />
          <Route exact path='/covnetmonth' element={<CovnetMonth />} />
          <Route exact path='/covnetsixmonth' element={<CovnetSixMonth />} />
          <Route exact path='/covnetyear' element={<CovnetYear />} />
          <Route exact path='/covnetfiveyear' element={<CovnetFiveYear />} />

          <Route exact path='/arlstmcovnetweek' element={<ArlstmCovnetWeek />} />
          <Route exact path='/arlstmcovnetmonth' element={<ArlstmCovnetMonth />} />
          <Route exact path='/arlstmcovnetsixmonth' element={<ArlstmCovnetSixMonth />} />
          <Route exact path='/arlstmcovnetyear' element={<ArlstmCovnetYear />} />
          <Route exact path='/arlstmcovnetfiveyear' element={<ArlstmCovnetFiveYear />} />

          <Route exact path='/arlstmcovnetlstmttvweek' element={<ArlstmCovnetLstmTtvWeek />} />
          <Route exact path='/arlstmcovnetlstmttvmonth' element={<ArlstmCovnetLstmTtvMonth />} />
          <Route exact path='/arlstmcovnetlstmttvsixmonth' element={<ArlstmCovnetLstmTtvSixMonth />} />
          <Route exact path='/arlstmcovnetlstmttvyear' element={<ArlstmCovnetLstmTtvYear />} />
          <Route exact path='/arlstmcovnetlstmttvfiveyear' element={<ArlstmCovnetLstmTtvFiveYear />} />

          <Route exact path='/arlstmcovnetlstmttvtttvweek' element={<ArlstmCovnetLstmTtvTttvWeek />} />
          <Route exact path='/arlstmcovnetlstmttvtttvmonth' element={<ArlstmCovnetLstmTtvTttvMonth />} />
          <Route exact path='/arlstmcovnetlstmttvtttvsixmonth' element={<ArlstmCovnetLstmTtvTttvSixMonth />} />
          <Route exact path='/arlstmcovnetlstmttvtttvyear' element={<ArlstmCovnetLstmTtvTttvYear />} />
          <Route exact path='/arlstmcovnetlstmttvtttvfiveyear' element={<ArlstmCovnetLstmTtvTttvFiveYear />} />



          <Route exact path='/iomodule' element={<Iomodule/>} />
          <Route exact path='/input' element={<Input/>} />
          <Route exact path='/output' element={<Output/>} />

          <Route exact path='/ocovnet' element={<Ocovnet/>} />
          <Route exact path='/olstm' element={<Olstm/>} />
          <Route exact path='/olstm' element={<Olstm/>} />
          <Route exact path='/otttv' element={<Otttv/>} />
          <Route exact path='/oarlstm' element={<Oarlstm/>} />
          <Route exact path='/ottv' element={<Ottv/>} />

          <Route exact path='/olstmcovnetarlstm' element={<Olstmcovnetarlstm/>} />
          <Route exact path='/oarlstmcovnetttv' element={<Oarlstmcovnetttv/>} />
          <Route exact path='/ocovnetttvtttv' element={<Ocovnetttvtttv/>} />
          <Route exact path='/olstmarlstmttv' element={<Olstmarlstmttv/>} />
          <Route exact path='/olstmarlstmtttv' element={<Olstmarlstmtttv/>} />

          <Route exact path='/olstmcovnet' element={<Olstmcovnet/>} />
          <Route exact path='/olstmarlstm' element={<Olstmarlstm/>} />
          <Route exact path='/oarlstmcovnet' element={<Oarlstmcovnet/>} />
          <Route exact path='/ocovnetttv' element={<Ocovnetttv/>} />
          <Route exact path='/ottvtttv' element={<Ottvtttv/>} />
          <Route exact path='/olstmttv' element={<Olstmttv/>} />
          <Route exact path='/olstmtttv' element={<Olstmtttv/>} />
          <Route exact path='/oarlstmttv' element={<Oarlstmttv/>} />
          <Route exact path='/oarlstmtttv' element={<Oarlstmtttv/>} />
          <Route exact path='/ocovnettttv' element={<Ocovnettttv/>} />
          <Route exact path='/olstmcovnetttv' element={<Olstmcovnetttv/>} />
          <Route exact path='/olstmcovnettttv' element={<Olstmcovnettttv/>} />
          <Route exact path='/Olstmttvtttv' element={<Olstmttvtttv/>} />

          <Route exact path='/olstmarlstmcovnetttv' element={<Olstmarlstmcovnetttv/>} />
          <Route exact path='/oarlstmcovnetttvtttv' element={<Oarlstmcovnetttvtttv/>} />
          <Route exact path='/olstmarlstmttvtttv' element={<Olstmarlstmttvtttv/>} />
          <Route exact path='/olstmcovnetttvtttv' element={<Olstmcovnetttvtttv/>} />

          <Route exact path='/olstmarlstmcovnetttvtttv' element={<Olstmarlstmcovnetttvtttv/>} />

          {/* {/* <Route exact path='/fetch' element={<Fetch/>} /> */}
          <Route exact path='/fetch2' element={<Fetch2/>} />
       







        
          



        </Routes>

      </Router>
    </div>
  );
}

export default App;
