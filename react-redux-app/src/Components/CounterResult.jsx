import { useDispatch, useSelector } from "react-redux";
import { resultActions } from "../store/result-slice";

import classes from "./CounterResutl.module.css";

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
              onClick={() => dispatch(resultActions.storeResult(counter))}
            >
              Store Result
            </button>
          </div>
          <ul className="list-group">
            {result.map((r, i) => (
              <li
                onClick={() => dispatch(resultActions.deleteResult(i))}
                className={`list-group-item ${classes["my-list-item"]}`}
              >
                {r}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default CounterResult;
