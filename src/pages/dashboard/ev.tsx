import { Helmet } from 'react-helmet-async';
import { EvView } from 'src/sections/ev/view';
// sections

// ----------------------------------------------------------------------

export default function OverviewEcommercePage() {
  return (
    <>
      <Helmet>
        <title> Dashboard: E-Commerce</title>
      </Helmet>

      <EvView />
    </>
  );
}
