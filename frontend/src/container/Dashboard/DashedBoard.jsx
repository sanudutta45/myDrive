import React, { Fragment } from "react";
import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";

//component
import AddFolder from "./AddFolder/AddFolder";
import useFolder from "./useFolder";
import Folder from "./Folder";
import File from "./File";

function DashedBoard(props) {
  const { user } = props;
  const { folderId } = useParams();

  const [state, setReFetchChild] = useFolder(folderId);
  const { folder, children } = state;

  console.log(folder);

  return (
    <section id="dashboard">
      <Container fluid>
        <div className="d-flex flex-wrap">
          <div className="bread-crumb flex-grow-1">myDrive / folder1 /</div>
          <div>
            <AddFolder
              currentUser={user}
              currentFolder={folder}  
              // folder={folder}
              setReFetchChild={setReFetchChild}
            />
          </div>
        </div>

        <div className="row">
          {children.length > 0 && (
            <Fragment>
              <div className="col-md-12 d-flex flex-wrap">
                {children.map(
                  (child) =>
                    child.isDir && (
                      <div
                        key={child._id}
                        style={{ maxWidth: "150px" }}
                        className="p-2"
                      >
                        <Folder folder={child} />
                      </div>
                    )
                )}
              </div>
              <div className="col-md-12 d-flex flex-wrap">
                {children.map(
                  (child) =>
                    !child.isDir && (
                      <div
                        key={child._id}
                        style={{ maxWidth: "150px" }}
                        className="p-2"
                      >
                        <File file={child} />
                      </div>
                    )
                )}
              </div>
            </Fragment>
          )}
        </div>
      </Container>
    </section>
  );
}
export default DashedBoard;
