
/* utils */
import { absoluteUrl, checkIsLogin } from '../../../middleware/utils';

/* components */
import Layout from '../../../components/layout/LayoutAdmin';
import IndexAdmin from './index-admin';
import IndexSuperAdmin from './index-super-admin';
// import UserNav from '../components/navigation/User';
import { useEffect, useState } from 'react';

import {
  Input,
  Typography
} from 'antd';

const { Text, Title } = Typography;

const { TextArea } = Input;

export default function Home(props) {
  const { user, origin } = props;
  const [login, setLogin] = useState(null)
  const [shouldRun, setShouldRun] = useState(true)

  function onChange(a, b, c) {
    console.log(a, b, c);
  }

  const contentStyle = {
    height: 'auto',
    textAlign: 'center',
  };

  useEffect(() => {
    // fetchUserLogin()
  }, [])

  async function fetchUserLogin() {
    const userLogin = await checkIsLogin()
    // console.log(userLogin)
    setUser(userLogin)
  }

  return (
    <Layout title="Government - Admin management" titlePage="หน้าหลัก" isMain={1} url={origin} origin={origin} user={login} props={props} indexMenu={"0"}
      _routes={[
        {
          path: '/admin/dashborad',
          breadcrumbName: 'หน้าหลัก',
        }]}
    >
      <div>
        {user && <>
          {user.type_user == 1 &&
            <IndexSuperAdmin user={user} />
          }
          {user.type_user == 2 &&
            <IndexAdmin userInfo={user} />
          }
        </>}

      </div>


    </Layout>
  );
}
/* getServerSideProps */
export async function getServerSideProps(context) {
  const { req } = context;
  const { origin } = absoluteUrl(req);

  return {
    props: {
      origin,
    },
  };
}
