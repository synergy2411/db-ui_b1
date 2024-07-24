import { useDispatch, useSelector } from "react-redux";
import { fetchAllUsers } from "../../store/users-slice";

function Users() {
  const dispatch = useDispatch();

  const { users, isLoading, errorMessage } = useSelector(
    (store) => store.users
  );

  return (
    <div className="m-4">
      <div className="row">
        <div className="col-4 offset-4">
          <div className="d-grid">
            <button
              className="btn btn-primary"
              onClick={() => dispatch(fetchAllUsers())}
            >
              Show Available Users
            </button>
          </div>
        </div>
      </div>

      {isLoading && <h1>Loading...</h1>}
      {errorMessage.trim() !== "" && <p>{errorMessage}</p>}

      {users.length !== 0 && (
        <div className="row">
          {users.map((user) => (
            <div className="col-4" key={user.id}>
              <div className="card">
                <div className="card-header">
                  <h4 className="text-center">{user.name.toUpperCase()}</h4>
                </div>
                <div className="card-body">
                  <p>{user.email}</p>
                  <p>{user.website}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Users;
