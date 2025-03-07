import {
  Button,
  Input, notification, Table, Typography
} from 'antd';
import Router from 'next/router';
// import UserNav from '../components/navigation/User';
import { useEffect, useState } from 'react';
/* components */
import Layout from '../../../components/layout/LayoutAdmin';
/* utils */
import {
  absoluteUrl, apiInstance,
  convertDateDBtoDatePickerNoTime,
  convertDatetoThaiDate
} from '../../../middleware/utils';

const { Text, Title } = Typography;

const { TextArea, Search } = Input;

export default function Home(props) {
  const [api, contextHolder] = notification.useNotification();
  const { user, origin } = props;
  const [login, setLogin] = useState(null);
  const [shouldRun, setShouldRun] = useState(true);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState('');
  const [visibleModalDelete, setVisibleModalDelete] = useState(false);
  const [dataDelete, setDataDelete] = useState(null);
  const [filters, setFilters] = useState(null);
  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 10,
  });
  const columns = [
    {
      title: 'วันที่',
      dataIndex: '',
      sorter: true,
      key: 'date_created',
      render: (data) => <>
        <span > {convertDatetoThaiDate(convertDateDBtoDatePickerNoTime(data.date_created))} </span>
      </>,
    },
    {
      title: 'ผู้ติดต่อ',
      dataIndex: 'contact_name_posted',
      sorter: true,
    },
    {
      title: 'หัวข้อการติดต่อ',
      dataIndex: 'contact_post',
      sorter: true,
    },
    {
      title: 'สถานะดำเนินการ',
      dataIndex: '',
      sorter: true,
      key: 'is_done',
      render: data => <>
        <span>
          {data.is_done == '1' ? "ดำเนินการแล้ว" : "ยังไม่ได้ดำเนินการ"}
        </span>
      </>,
    },
    {
      title: '',
      dataIndex: '',
      key: 'x',
      render: (data) => <>
        <Button
          size={'default'}
          onClick={() => gotoPage(data.contact_id)}
        >
          {' '}
          รายละเอียด{' '}
        </Button>
      </>,
    },
  ];
  const gotoPage = id => {
    console.log(id);
    Router.push('/admin/management-contact/' + id);
  };

  useEffect(() => {
    var _filters = [];
    pagination.filters = _filters;
    fetch({ pagination });
  }, []);

  const handleTableChange = (pagination, filters, sorter) => {
    console.log(sorter);
    setPagination({
      pageSize: pagination.pageSize,
      current: pagination.current,
    });
    setFilters(filters.package);
    fetch({
      sortField: sorter.columnKey,
      sortOrder: sorter.order,
      pagination,
      filters: filters.package,
    });
  };
  const onSearch = async _search => {
    setLoading(true);
    setSearch(_search);
    setPagination({
      pageSize: pagination.pageSize,
      current: 1,
    });
    const addactivitiesData = await apiInstance().get(
      'contact?organization_id=' +
      (user ? user.organization_id : 0) +
      '&results=' +
      pagination.pageSize +
      '&page=1&search=' +
      _search +
      '&filters=' +
      filters,
    );

    setData(addactivitiesData.data.results);
    setLoading(false);
  };
  const fetch = async (params = {}) => {
    setLoading(true);
    const addactivitiesData = await apiInstance().get(
      'contact?organization_id=' +
      (user ? user.organization_id : 0) +
      '&results=' +
      params.pagination.pageSize +
      '&page=' +
      params.pagination.current +
      '&search=' +
      search +
      '&sortField=' +
      params.sortField +
      '&sortOrder=' +
      params.sortOrder +
      '&filters=' +
      params.filters,
    );

    setData(addactivitiesData.data.results);
    setPagination({
      ...params.pagination,
      total: addactivitiesData.data.totalCount,
      // 200 is mock data, you should read it from server
      // total: data.totalCount,
    });
    setLoading(false);
  };

  const showModal = data => {
    console.log('data deleted');
    console.log(data);
    setDataDelete(data);
    setVisibleModalDelete(true);
  };

  const hideModal = () => {
    setVisibleModalDelete(false);
  };

  const onDeleteOrganization = async () => {
    const registerData = await apiInstance().delete(
      'contact/' + dataDelete.contact_id,
      {},
    );
    if (registerData.data.status == 200) {
      openNotificationSuccess();
      // fetchOrganizationData();
      setVisibleModalDelete(false);
      fetch({ pagination });
    } else {
      openNotificationFail(registerData.data.message);
    }
  };

  const openNotificationSuccess = () => {
    api.success({
      message: `ลบข้อมูลสำเร็จ`,
      description: 'ลบข้อมูลสำเร็จ',
      placement: 'topRight',
    });
  };

  const openNotificationFail = messgae => {
    api.error({
      message: `พบปัญหาระหว่างการบันทึกข้อมูล`,
      description: messgae,
      placement: 'topRight',
    });
  };
  return (
    <Layout key={"home-contact"} titlePage={"จัดการข้อมูลติดต่อเรา"} title="Government - Admin management" url={origin} origin={origin} isMain={true}
      indexMenu={"4"}
      user={login} props={props} _routes={[
        {
          path: '/admin/dashborad',
          breadcrumbName: 'หน้าหลัก',
        }, {
          path: '/admin/management-contact',
          breadcrumbName: 'จัดการข้อมูลติดต่อเรา',
        }]}>
      <div>
        {contextHolder}
        <div className="w-full lg:inline-flex justify-between">
          <div className="w-full lg:w-1/2 py-2 justify-center">
            {/* <Link href="/admin/management/journal/add-journal">
              <a
                //onClick={(e) => handleLogout(e)}
                className="lg:inline-flex lg:w-auto px-2 py-2 rounded h-8 text-white bg-green-600 font-bold items-center justify-center hover:bg-green-600 hover:text-white"
              >
                เพิ่มวารสาร
              </a>
            </Link> */}
          </div>
          <div className="text-right w-full justify-items-end lg:w-auto py-2">
            <Search placeholder="กรอกหัวข้อการติดต่อ"
              onSearch={onSearch}
              enterButton
              allowClear
            />
          </div>
        </div>

        <Table
          columns={columns}
          rowKey={record => record.contact_id}
          dataSource={data}
          pagination={pagination}
          loading={loading}
          onChange={handleTableChange}
        />
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
