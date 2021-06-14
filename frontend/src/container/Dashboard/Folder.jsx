import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const Folder = ({ folder }) => {
  return (
    <Button to={`/app/dashboard/folder/${folder._id}`} variant="outline-dark" className="text-truncate w-100" as={Link}>
      <i className="fa fa-folder mr-2"/>
      {folder.name}
    </Button>
  );
};

export default Folder;
