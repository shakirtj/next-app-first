import React from "react";

export const dynamicParams = false;

function Page(props:any) {
    console.log(props.params.slug)
  return <div style={{ height: "200px", marginTop: "40px" }}>Page</div>;
}

export default Page;

export async function generateStaticParams() {
  return [
    { slug: "honda-bikes" },
    { slug: "tvs-bikes" },
    { slug: "hero-bikes" },
    { slug: "bajaj-bikes" },
    { slug: "yamaha-bikes" },
  ];
}
