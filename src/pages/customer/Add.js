import { Formik, Form, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { $t } from 'hooks/i18n';
import { Button } from 'primereact/button';
import { DataSource } from 'components/DataSource';
import { Dropdown } from 'primereact/dropdown';
import { InputText } from 'primereact/inputtext';
import { ProgressSpinner } from 'primereact/progressspinner';
import { Title } from 'components/Title';
import useApp from 'hooks/useApp';

import useAddPage from 'hooks/useAddPage';
const CustomerAddPage = (props) => {
		const app = useApp();
	
	//form validation rules
	const validationSchema = yup.object().shape({
		firstname: yup.string().required().label($t('firstname')),
		lastname: yup.string().required().label($t('lastname')),
		company: yup.string().nullable().label($t('company')),
		address: yup.string().nullable().label($t('address')),
		city: yup.string().nullable().label($t('city')),
		state: yup.string().nullable().label($t('state')),
		country: yup.string().nullable().label($t('country')),
		postalcode: yup.string().nullable().label($t('postalcode')),
		phone: yup.string().nullable().label($t('phone')),
		fax: yup.string().nullable().label($t('fax')),
		email: yup.string().email().required().label($t('email')),
		supportrepid: yup.string().nullable().label($t('supportrepid'))
	});
	
	//form default values
	const formDefaultValues = {
		firstname: '', 
		lastname: '', 
		company: '', 
		address: '', 
		city: '', 
		state: '', 
		country: '', 
		postalcode: '', 
		phone: '', 
		fax: '', 
		email: '', 
		supportrepid: '', 
	}
	
	//page hook where logics resides
	const pageController =  useAddPage({ props, formDefaultValues, afterSubmit });
	
	// destructure and grab what the page needs
	const { formData, resetForm, handleSubmit, submitForm, pageReady, loading, saving, inputClassName } = pageController;
	
	//event raised after form submit
	function afterSubmit(response){
		app.flashMsg(props.msgTitle, props.msgAfterSave);
		resetForm();
		if(app.isDialogOpen()){
			app.closeDialogs(); // if page is open as dialog, close dialog
		}
		else if(props.redirect) {
			app.navigate(`/customer`);
		}
	}
	
	// page loading form data from api
	if(loading){
		return (
			<div className="p-3 text-center">
				<ProgressSpinner style={{width:'50px', height:'50px'}} />
			</div>
		);
	}
	
	//page has loaded any required data and ready to render
	if(pageReady){
		return (
<main id="CustomerAddPage" className="main-page">
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
                    <Title title={$t('addNewCustomer')}   titleClass="text-2xl text-primary font-bold" subTitleClass="text-500"      separator={false} />
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
                        <Formik initialValues={formData} validationSchema={validationSchema} onSubmit={(values, actions) =>submitForm(values)}>
                            {(formik) => 
                            <>
                            <Form className={`${!props.isSubPage ? 'card  ' : ''}`}>
                                <div className="grid">
                                    <div className="col-12">
                                        <div className="formgrid grid">
                                            <div className="col-12 md:col-3">
                                                {$t('firstname')} *
                                            </div>
                                            <div className="col-12 md:col-9">
                                                <InputText name="firstname"  onChange={formik.handleChange}  value={formik.values.firstname}   label={$t('firstname')} type="text" placeholder={$t('enterFirstname')}        className={inputClassName(formik?.errors?.firstname)} />
                                                <ErrorMessage name="firstname" component="span" className="p-error" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="formgrid grid">
                                            <div className="col-12 md:col-3">
                                                {$t('lastname')} *
                                            </div>
                                            <div className="col-12 md:col-9">
                                                <InputText name="lastname"  onChange={formik.handleChange}  value={formik.values.lastname}   label={$t('lastname')} type="text" placeholder={$t('enterLastname')}        className={inputClassName(formik?.errors?.lastname)} />
                                                <ErrorMessage name="lastname" component="span" className="p-error" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="formgrid grid">
                                            <div className="col-12 md:col-3">
                                                {$t('company')} 
                                            </div>
                                            <div className="col-12 md:col-9">
                                                <InputText name="company"  onChange={formik.handleChange}  value={formik.values.company}   label={$t('company')} type="text" placeholder={$t('enterCompany')}        className={inputClassName(formik?.errors?.company)} />
                                                <ErrorMessage name="company" component="span" className="p-error" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="formgrid grid">
                                            <div className="col-12 md:col-3">
                                                {$t('address')} 
                                            </div>
                                            <div className="col-12 md:col-9">
                                                <InputText name="address"  onChange={formik.handleChange}  value={formik.values.address}   label={$t('address')} type="text" placeholder={$t('enterAddress')}        className={inputClassName(formik?.errors?.address)} />
                                                <ErrorMessage name="address" component="span" className="p-error" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="formgrid grid">
                                            <div className="col-12 md:col-3">
                                                {$t('city')} 
                                            </div>
                                            <div className="col-12 md:col-9">
                                                <InputText name="city"  onChange={formik.handleChange}  value={formik.values.city}   label={$t('city')} type="text" placeholder={$t('enterCity')}        className={inputClassName(formik?.errors?.city)} />
                                                <ErrorMessage name="city" component="span" className="p-error" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="formgrid grid">
                                            <div className="col-12 md:col-3">
                                                {$t('state')} 
                                            </div>
                                            <div className="col-12 md:col-9">
                                                <InputText name="state"  onChange={formik.handleChange}  value={formik.values.state}   label={$t('state')} type="text" placeholder={$t('enterState')}        className={inputClassName(formik?.errors?.state)} />
                                                <ErrorMessage name="state" component="span" className="p-error" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="formgrid grid">
                                            <div className="col-12 md:col-3">
                                                {$t('country')} 
                                            </div>
                                            <div className="col-12 md:col-9">
                                                <InputText name="country"  onChange={formik.handleChange}  value={formik.values.country}   label={$t('country')} type="text" placeholder={$t('enterCountry')}        className={inputClassName(formik?.errors?.country)} />
                                                <ErrorMessage name="country" component="span" className="p-error" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="formgrid grid">
                                            <div className="col-12 md:col-3">
                                                {$t('postalcode')} 
                                            </div>
                                            <div className="col-12 md:col-9">
                                                <InputText name="postalcode"  onChange={formik.handleChange}  value={formik.values.postalcode}   label={$t('postalcode')} type="text" placeholder={$t('enterPostalcode')}        className={inputClassName(formik?.errors?.postalcode)} />
                                                <ErrorMessage name="postalcode" component="span" className="p-error" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="formgrid grid">
                                            <div className="col-12 md:col-3">
                                                {$t('phone')} 
                                            </div>
                                            <div className="col-12 md:col-9">
                                                <InputText name="phone"  onChange={formik.handleChange}  value={formik.values.phone}   label={$t('phone')} type="text" placeholder={$t('enterPhone')}        className={inputClassName(formik?.errors?.phone)} />
                                                <ErrorMessage name="phone" component="span" className="p-error" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="formgrid grid">
                                            <div className="col-12 md:col-3">
                                                {$t('fax')} 
                                            </div>
                                            <div className="col-12 md:col-9">
                                                <InputText name="fax"  onChange={formik.handleChange}  value={formik.values.fax}   label={$t('fax')} type="text" placeholder={$t('enterFax')}        className={inputClassName(formik?.errors?.fax)} />
                                                <ErrorMessage name="fax" component="span" className="p-error" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="formgrid grid">
                                            <div className="col-12 md:col-3">
                                                {$t('email')} *
                                            </div>
                                            <div className="col-12 md:col-9">
                                                <InputText name="email"  onChange={formik.handleChange}  value={formik.values.email}   label={$t('email')} type="email" placeholder={$t('enterEmail')}        className={inputClassName(formik?.errors?.email)} />
                                                <ErrorMessage name="email" component="span" className="p-error" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="formgrid grid">
                                            <div className="col-12 md:col-3">
                                                {$t('supportrepid')} 
                                            </div>
                                            <div className="col-12 md:col-9">
                                                <DataSource   apiPath="components_data/supportrepid_option_list"  >
                                                    {
                                                    ({ response }) => 
                                                    <>
                                                    <Dropdown  name="supportrepid"     optionLabel="label" optionValue="value" value={formik.values.supportrepid} onChange={formik.handleChange} options={response} label={$t('supportrepid')}  placeholder={$t('selectAValue')}  className={inputClassName(formik?.errors?.supportrepid)}   />
                                                    <ErrorMessage name="supportrepid" component="span" className="p-error" />
                                                    </>
                                                    }
                                                </DataSource>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                { props.showFooter && 
                                <div className="text-center my-3">
                                    <Button onClick={(e) => handleSubmit(e, formik)} className="p-button-primary" type="submit" label={$t('submit')} icon="pi pi-send" loading={saving} />
                                </div>
                                }
                            </Form>
                            </>
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

//page props and default values
CustomerAddPage.defaultProps = {
	primaryKey: 'customerid',
	pageName: 'customer',
	apiPath: 'customer/add',
	routeName: 'customeradd',
	submitButtonLabel: $t('submit'),
	formValidationError: $t('formIsInvalid'),
	formValidationMsg: $t('pleaseCompleteTheForm'),
	msgTitle: $t('createRecord'),
	msgAfterSave: $t('recordAddedSuccessfully'),
	msgBeforeSave: $t(''),
	showHeader: true,
	showFooter: true,
	redirect: true,
	isSubPage: false
}
export default CustomerAddPage;
