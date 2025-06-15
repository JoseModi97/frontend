import { useEffect } from 'react';
import { $t } from 'hooks/i18n';
import { TabView, TabPanel } from 'primereact/tabview';
import { Title } from 'components/Title';
import TrackListPage from 'pages/track/List';
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
		const trackFormData = { genreid:record?.genreid }
		app.setPageFormData('track', trackFormData);
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
        <TabPanel header={<Title title={$t('genreTrack')}  headerClass="p-0" titleClass="text-lg font-bold"  iconClass="pi pi-th-large" avatarSize="small"    separator={false} />}>
            <div className="reset-grid">
                <TrackListPage isSubPage  fieldName="Track.genreid" fieldValue={masterRecord.genreid} showBreadcrumbs={false} showHeader={false} showFooter={true}>
                    </TrackListPage>
                </div>
            </TabPanel>
        </TabView>
    </div>
		);
	}
}
export default MasterDetailPages;
