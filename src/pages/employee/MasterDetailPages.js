import { useEffect } from 'react';
import { $t } from 'hooks/i18n';
import { TabView, TabPanel } from 'primereact/tabview';
import { Title } from 'components/Title';
import CustomerListPage from 'pages/customer/List';
import EmployeeListPage from 'pages/employee/List';
import useApp from 'hooks/useApp';

const MasterDetailPages = (props) => {
		const app = useApp();
	const { masterRecord, scrollIntoView = true } = props;
	const activeTab = 0;
	function scrollToDetailPage() {
		if (scrollIntoView) {
			const pageElement = document.getElementById('master-detailpage');
			if(pageElement){
				pageElement.scrollIntoView({behavior:'smooth', block:'start'});
			}
		}
	}
	// pass form data from master to detail
	function setDetailPageFormData(){
		const record = masterRecord;
		// set  form data
		const customerFormData = { supportrepid:record?.employeeid }
		app.setPageFormData('customer', customerFormData);
		// set  form data
		const employeeFormData = { reportsto:record?.employeeid }
		app.setPageFormData('employee', employeeFormData);
	}
	// pass form data from master to detail
	useEffect(() => {
		scrollToDetailPage();
		setDetailPageFormData();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [masterRecord]);
	if(masterRecord){
		return (
<div id="master-detailpage">
    <TabView value={activeTab}>
        <TabPanel header={<Title title={$t('employeeCustomer')}  headerClass="p-0" titleClass="text-lg font-bold"  iconClass="pi pi-th-large" avatarSize="small"    separator={false} />}>
            <div className="reset-grid">
                <CustomerListPage isSubPage  fieldName="Customer.supportrepid" fieldValue={masterRecord.employeeid} showBreadcrumbs={false} showHeader={false} showFooter={true}>
                </CustomerListPage>
            </div>
        </TabPanel>
        <TabPanel header={<Title title={$t('employeeEmployee')}  headerClass="p-0" titleClass="text-lg font-bold"  iconClass="pi pi-th-large" avatarSize="small"    separator={false} />}>
            <div className="reset-grid">
                <EmployeeListPage isSubPage  fieldName="Employee.reportsto" fieldValue={masterRecord.employeeid} showBreadcrumbs={false} showHeader={false} showFooter={true}>
                </EmployeeListPage>
            </div>
        </TabPanel>
    </TabView>
</div>
		);
	}
}
export default MasterDetailPages;
