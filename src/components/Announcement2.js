import React from "react";
import Alert from "react-bootstrap/Alert";
import Link from "next/link";

function Announcement2(props) {
  return (
    <Alert variant={props.variant} className="border-0 rounded-0 text-center">
      {props.text}
      {` `}

      <Link href="/pricing" passHref>
        <Alert.Link>{props.linkText}</Alert.Link>
      </Link>
    </Alert>
  );
}

export default Announcement2;
