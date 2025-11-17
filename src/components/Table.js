import Table from 'react-bootstrap/Table';

function AppTable() {
    const lenth = [
        {
            firstName:"Name",
            lastName:"LName",
            userName: "login"
        },
        {
            firstName:"2Name",
            lastName:"LName",
            userName: "login"
        },
        {
            firstName:"3Name",
            lastName:"LName",
            userName: "login"
        },
        {
            firstName:"4Name",
            lastName:"LName",
            userName: "login"
        },
        {
            firstName:"5Name",
            lastName:"LName",
            userName: "login"
        }
    ];
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        {lenth.map(function (obj, i){
            return (
            <tr>
                <td>{i}</td>
                <td>{obj.firstName}</td>
                <td>Otto</td>
                <td>@mdo</td>
            </tr>
        );
        })}
        
        <tr>
          <td>3</td>
          <td colSpan={2}>Larry the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default AppTable;