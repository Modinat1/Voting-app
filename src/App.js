import Home from "./pages/Home";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import MyPolls from "./components/MyPolls/MyPolls";
import CastVote from "./components/CastVote";
import CreatePollForm from "./components/CreatePollForm/CreatePollForm";
import ClosePoll from "./components/ClosePoll";
import PollResult from "./components/PollResult";
import ApprovedWithdrawal from "./components/ApprovedWithdrawal";
import RequestAccess from "./components/RequestAccess";
import ProceedPay from "./components/ProceedPay";
import PaymentConfirmed from "./components/PaymentConfirmed";

function App() {
   const [openBurger, setOpenBurger] = useState(false)
  const [openNotif, setOpenNotif] = useState(false)
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home openBurger={openBurger} setOpenBurger={setOpenBurger} openNotif={openNotif} setOpenNotif={setOpenNotif}/>}></Route>
        <Route path="/mypolls" element={<MyPolls openBurger={openBurger} setOpenBurger={setOpenBurger} openNotif={openNotif} setOpenNotif={setOpenNotif}/>}></Route>
        <Route path="/cast_vote" element={<CastVote/>}></Route>
        <Route path="/create_poll" element={<CreatePollForm/>}></Route>
        <Route path="/close_poll" element={<ClosePoll/>}></Route>
        <Route path="/poll_result" element={<PollResult openBurger={openBurger} setOpenBurger={setOpenBurger}/>}></Route>
        <Route path="/approved/withdrawal" element={<ApprovedWithdrawal/>}></Route>
        <Route path="/request/acess" element={<RequestAccess/>}></Route>
        <Route path="/proceed/pay" element={<ProceedPay/>}></Route>
        <Route path="/payment/confirmed" element={<PaymentConfirmed/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
