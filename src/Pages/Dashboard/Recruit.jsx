import React from "react";

const Recruit = () => {
  return (
    <section>
      <div className="row">
        <div className="d-flex justify-content-between align-items-center">
          <h4 className="ms-1">Recruitment Progress</h4>
          <button className="btn btn-primary">see all</button>
        </div>
        <div className="mt-2 shadow-sm bg-body rounded">
          <table className="table table-borderless">
            <thead>
              <tr className="text-muted">
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>
                  <i className="fa-solid fa-ellipsis-vertical"></i>
                </td>
              </tr>
              <tr>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
                <td>
                  <i className="fa-solid fa-ellipsis-vertical"></i>
                </td>
              </tr>
              <tr>
                <td>Larry the Bird</td>
                <td>Larry the Bird</td>
                <td>@twitter</td>
                <td>
                  <i className="fa-solid fa-ellipsis-vertical"></i>
                </td>
              </tr>
              <tr>
                <td>Larry the Bird</td>
                <td>Larry the Bird</td>
                <td>@twitter</td>
                <td>
                  <i className="fa-solid fa-ellipsis-vertical"></i>
                </td>
              </tr>
              <tr>
                <td>Larry the Bird</td>
                <td>Larry the Bird</td>
                <td>@twitter</td>
                <td>
                  <i className="fa-solid fa-ellipsis-vertical"></i>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Recruit;
