```javascript
// pages/about.js
import { unstable_getServerSession } from 'next-auth';
import { authOptions } from './api/auth/[...nextauth]';

export async function getServerSideProps(context) {
  const session = await unstable_getServerSession(context.req, context.res, authOptions);

  if (!session) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return {
    props: {
      session,
    },
  };
}
export default function About({ session }) {

  if (!session) {
    return <div>Access Denied</div>;
  }

  return (
    <div>
      <h1>About Page</h1>
      <p>This is the about page.</p>
      <p>User Email: {session.user.email}</p>
    </div>
  );
}
```