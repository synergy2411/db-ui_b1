import { useDispatch, useSelector } from "react-redux";
import { storeResult } from "../store/result-slice";

function CounterResult() {
  const { counter } = useSelector((store) => store.ctr);
  const { result } = useSelector((store) => store.res);
  const dispatch = useDispatch();

  return (
    <>
      <div className="row">
        <div className="col-6 offset-3">
          <div className="d-grid">
            <button
              className="btn btn-danger"
              onClick={() => dispatch(storeResult(counter))}
            >
              Store Result
            </button>
          </div>
          <ul className="list-group">
            {result.map((r) => (
              <li className="list-group-item">{r}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default CounterResult;
