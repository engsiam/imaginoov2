import Head from "next/head";

const MetaData = ({ title, description }) => {
  return (
    <Head>
      <title>{title} - Campaign Details</title>
      <meta name="description" content={description} />
    </Head>
  );
};

export default MetaData;
