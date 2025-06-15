import { Formik, Form, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { $t } from 'hooks/i18n';
import { Button } from 'primereact/button';
import { DataSource } from 'components/DataSource';
import { Dropdown } from 'primereact/dropdown';
import { InputText } from 'primereact/inputtext';
import { PageRequestError } from 'components/PageRequestError';
import { ProgressSpinner } from 'primereact/progressspinner';
import { Title } from 'components/Title';
import useApp from 'hooks/useApp';

import useEditPage from 'hooks/useEditPage';
const TrackEditPage = (props) => {
		const app = useApp();
	// form validation schema
	const validationSchema = yup.object().shape({
		name: yup.string().required().label($t('name')),
		albumid: yup.string().nullable().label($t('albumid')),
		mediatypeid: yup.string().required().label($t('mediatypeid')),
		genreid: yup.string().nullable().label($t('genreid')),
		composer: yup.string().nullable().label($t('composer')),
		milliseconds: yup.number().required().label($t('milliseconds')),
		bytes: yup.number().nullable().label($t('bytes')),
		unitprice: yup.string().required().label($t('unitprice'))
	});
	// form default values
	const formDefaultValues = {
		name: '', 
		albumid: '', 
		mediatypeid: '', 
		genreid: '', 
		composer: '', 
		milliseconds: '', 
		bytes: '', 
		unitprice: '', 
	}
	//where page logics resides
	const pageController = useEditPage({ props, formDefaultValues, afterSubmit });
	//destructure and grab what we need
	const { formData, handleSubmit, submitForm, pageReady, loading, saving, apiRequestError, inputClassName } = pageController
	//Event raised on form submit success
	function afterSubmit(response){
		app.flashMsg(props.msgTitle, props.msgAfterSave);
		if(app.isDialogOpen()){
			app.closeDialogs(); // if page is open as dialog, close dialog
		}
		else if(props.redirect) {
			app.navigate(`/track`);
		}
	}
	// loading form data from api
	if(loading){
		return (
			<div className="p-3 text-center">
				<ProgressSpinner style={{width:'50px', height:'50px'}} />
			</div>
		);
	}
	//display error page 
	if(apiRequestError){
		return (
			<PageRequestError error={apiRequestError} />
		);
	}
	//page is ready when formdata loaded successfully
	if(pageReady){
		return (
<main id="TrackEditPage" className="main-page">
    { (props.showHeader) && 
    <section className="page-section mb-3" >
        <div className="container">
            <div className="grid justify-content-between align-items-center">
                { !props.isSubPage && 
                <div className="col-fixed " >
                    <Button onClick={() => app.navigate(-1)} label={$t('')}  className="p-button p-button-text " icon="pi pi-arrow-left"  />
                </div>
                }
                <div className="col " >
                    <Title title={$t('editTrack')}   titleClass="text-2xl text-primary font-bold" subTitleClass="text-500"      separator={false} />
                </div>
            </div>
        </div>
    </section>
    }
    <section className="page-section " >
        <div className="container">
            <div className="grid ">
                <div className="md:col-9 sm:col-12 comp-grid" >
                    <div >
                        <Formik
                            initialValues={formData}
                            validationSchema={validationSchema} 
                            onSubmit={(values, actions) => {
                            submitForm(values);
                            }
                            }
                            >
                            { (formik) => {
                            return (
                            <Form className={`${!props.isSubPage ? 'card  ' : ''}`}>
                                <div className="grid">
                                    <div className="col-12">
                                        <div className="formgrid grid">
                                            <div className="col-12 md:col-3">
                                                {$t('name')} *
                                            </div>
                                            <div className="col-12 md:col-9">
                                                <InputText name="name"  onChange={formik.handleChange}  value={formik.values.name}   label={$t('name')} type="text" placeholder={$t('enterName')}        className={inputClassName(formik?.errors?.name)} />
                                                <ErrorMessage name="name" component="span" className="p-error" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="formgrid grid">
                                            <div className="col-12 md:col-3">
                                                {$t('albumid')} 
                                            </div>
                                            <div className="col-12 md:col-9">
                                                <DataSource   apiPath="components_data/albumid_option_list"  >
                                                    {
                                                    ({ response }) => 
                                                    <>
                                                    <Dropdown  name="albumid"     optionLabel="label" optionValue="value" value={formik.values.albumid} onChange={formik.handleChange} options={response} label={$t('albumid')}  placeholder={$t('selectAValue')}  className={inputClassName(formik?.errors?.albumid)}   />
                                                    <ErrorMessage name="albumid" component="span" className="p-error" />
                                                    </>
                                                    }
                                                </DataSource>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="formgrid grid">
                                            <div className="col-12 md:col-3">
                                                {$t('mediatypeid')} *
                                            </div>
                                            <div className="col-12 md:col-9">
                                                <DataSource   apiPath="components_data/mediatypeid_option_list"  >
                                                    {
                                                    ({ response }) => 
                                                    <>
                                                    <Dropdown  name="mediatypeid"     optionLabel="label" optionValue="value" value={formik.values.mediatypeid} onChange={formik.handleChange} options={response} label={$t('mediatypeid')}  placeholder={$t('selectAValue')}  className={inputClassName(formik?.errors?.mediatypeid)}   />
                                                    <ErrorMessage name="mediatypeid" component="span" className="p-error" />
                                                    </>
                                                    }
                                                </DataSource>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="formgrid grid">
                                            <div className="col-12 md:col-3">
                                                {$t('genreid')} 
                                            </div>
                                            <div className="col-12 md:col-9">
                                                <DataSource   apiPath="components_data/genreid_option_list"  >
                                                    {
                                                    ({ response }) => 
                                                    <>
                                                    <Dropdown  name="genreid"     optionLabel="label" optionValue="value" value={formik.values.genreid} onChange={formik.handleChange} options={response} label={$t('genreid')}  placeholder={$t('selectAValue')}  className={inputClassName(formik?.errors?.genreid)}   />
                                                    <ErrorMessage name="genreid" component="span" className="p-error" />
                                                    </>
                                                    }
                                                </DataSource>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="formgrid grid">
                                            <div className="col-12 md:col-3">
                                                {$t('composer')} 
                                            </div>
                                            <div className="col-12 md:col-9">
                                                <InputText name="composer"  onChange={formik.handleChange}  value={formik.values.composer}   label={$t('composer')} type="text" placeholder={$t('enterComposer')}        className={inputClassName(formik?.errors?.composer)} />
                                                <ErrorMessage name="composer" component="span" className="p-error" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="formgrid grid">
                                            <div className="col-12 md:col-3">
                                                {$t('milliseconds')} *
                                            </div>
                                            <div className="col-12 md:col-9">
                                                <InputText name="milliseconds"  onChange={formik.handleChange}  value={formik.values.milliseconds}   label={$t('milliseconds')} type="number" placeholder={$t('enterMilliseconds')}  min={0}  step="any"    className={inputClassName(formik?.errors?.milliseconds)} />
                                                <ErrorMessage name="milliseconds" component="span" className="p-error" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="formgrid grid">
                                            <div className="col-12 md:col-3">
                                                {$t('bytes')} 
                                            </div>
                                            <div className="col-12 md:col-9">
                                                <InputText name="bytes"  onChange={formik.handleChange}  value={formik.values.bytes}   label={$t('bytes')} type="number" placeholder={$t('enterBytes')}  min={0}  step="any"    className={inputClassName(formik?.errors?.bytes)} />
                                                <ErrorMessage name="bytes" component="span" className="p-error" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="formgrid grid">
                                            <div className="col-12 md:col-3">
                                                {$t('unitprice')} *
                                            </div>
                                            <div className="col-12 md:col-9">
                                                <InputText name="unitprice"  onChange={formik.handleChange}  value={formik.values.unitprice}   label={$t('unitprice')} type="text" placeholder={$t('enterUnitprice')}        className={inputClassName(formik?.errors?.unitprice)} />
                                                <ErrorMessage name="unitprice" component="span" className="p-error" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                { props.showFooter && 
                                <div className="text-center my-3">
                                    <Button onClick={(e) => handleSubmit(e, formik)}  type="submit" label={$t('update')} icon="pi pi-send" loading={saving} />
                                </div>
                                }
                            </Form>
                            );
                            }
                            }
                            </Formik>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
		);
	}
}
TrackEditPage.defaultProps = {
	primaryKey: 'trackid',
	pageName: 'track',
	apiPath: 'track/edit',
	routeName: 'trackedit',
	submitButtonLabel: $t('update'),
	formValidationError: $t('formIsInvalid'),
	formValidationMsg: $t('pleaseCompleteTheForm'),
	msgTitle: $t('updateRecord'),
	msgAfterSave: $t('recordUpdatedSuccessfully'),
	msgBeforeSave: $t(''),
	showHeader: true,
	showFooter: true,
	redirect: true,
	isSubPage: false
}
export default TrackEditPage;
