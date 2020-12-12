import { Switch, Route } from 'react-router-dom';

import LoginPage from './pages/LoginPage/LoginPage';
import SignUp from './pages/SignUp/SignUp';

function App() {
  return (
    <>
      <Switch>
        {/*<Route path='/'>*/}
        {/*</Route>*/}
        {/*</Route>*/}
        {/*<Route path='/dashboard'>*/}
        {/*  { 'smth' ? <ConsumerDashboard/> : <SupplierDashboard/> }*/}
        {/*</Route>*/}
        <Route exact path='/login' component={LoginPage} />
        <Route exact path='/signup' component={SignUp} />
      </Switch>
    </>
  );
}

// Функция модалки - когда нажимаешь на кнопку выносится модалка, которая спрашивает - клиент или поставщик
// function Example() {
//   const [show, setShow] = useState(false);
//
//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);
//
//   return (
//     <>
//       <Button variant="primary" onClick={handleShow}>
//        SignUp
//       </Button>
//
//       <Modal show={show} onHide={handleClose}>
//         <Modal.Header closeButton>
//           <Modal.Title>Choose your role</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//         <Button variant="primary" onClick={SignUpSupplier}>
//            Supplier
//          </Button>
//          <Button variant="primary" onClick={SignUpConsumer}>
//             Consumer
//          </Button>
//          </Modal.Body>
//       </Modal>
//     </>
//   );
// }
// render(<Example />);



export default App;
