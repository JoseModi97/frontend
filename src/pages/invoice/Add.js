import { Formik, Form, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { $t } from 'hooks/i18n';
import { Button } from 'primereact/button';
import { Calendar } from 'primereact/calendar';
import { InputText } from 'primereact/inputtext';
import { ProgressSpinner } from 'primereact/progressspinner';
import { Title } from 'components/Title';
import useApp from 'hooks/useApp';

import useAddPage from 'hooks/useAddPage';
const InvoiceAddPage = (props) => {
		const app = useApp();
	
	//form validation rules
	const validationSchema = yup.object().shape({
		invoicedate: yup.string().required().label($t('invoicedate')),
		billingaddress: yup.string().nullable().label($t('billingaddress')),
		billingcity: yup.string().nullable().label($t('billingcity')),
		billingstate: yup.string().nullable().label($t('billingstate')),
		billingcountry: yup.string().nullable().label($t('billingcountry')),
		billingpostalcode: yup.string().nullable().label($t('billingpostalcode')),
		total: yup.string().required().label($t('total'))
	});
	
	//form default values
	const formDefaultValues = {
		invoicedate: new Date(), 
		billingaddress: '', 
		billingcity: '', 
		billingstate: '', 
		billingcountry: '', 
		billingpostalcode: '', 
		total: '', 
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
			app.navigate(`/invoice`);
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
<main id="InvoiceAddPage" className="main-page">
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
                    <Title title={$t('addNewInvoice')}   titleClass="text-2xl text-primary font-bold" subTitleClass="text-500"      separator={false} />
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
                                                {$t('invoicedate')} *
                                            </div>
                                            <div className="col-12 md:col-9">
                                                <Calendar name="invoicedate" value={formik.values.invoicedate} onChange={formik.handleChange} showButtonBar showTime dateFormat="yy-mm-dd" hourFormat="24"showIcon className={inputClassName(formik?.errors?.invoicedate)}        />
                                                <ErrorMessage name="invoicedate" component="span" className="p-error" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="formgrid grid">
                                            <div className="col-12 md:col-3">
                                                {$t('billingaddress')} 
                                            </div>
                                            <div className="col-12 md:col-9">
                                                <InputText name="billingaddress"  onChange={formik.handleChange}  value={formik.values.billingaddress}   label={$t('billingaddress')} type="text" placeholder={$t('enterBillingaddress')}        className={inputClassName(formik?.errors?.billingaddress)} />
                                                <ErrorMessage name="billingaddress" component="span" className="p-error" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="formgrid grid">
                                            <div className="col-12 md:col-3">
                                                {$t('billingcity')} 
                                            </div>
                                            <div className="col-12 md:col-9">
                                                <InputText name="billingcity"  onChange={formik.handleChange}  value={formik.values.billingcity}   label={$t('billingcity')} type="text" placeholder={$t('enterBillingcity')}        className={inputClassName(formik?.errors?.billingcity)} />
                                                <ErrorMessage name="billingcity" component="span" className="p-error" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="formgrid grid">
                                            <div className="col-12 md:col-3">
                                                {$t('billingstate')} 
                                            </div>
                                            <div className="col-12 md:col-9">
                                                <InputText name="billingstate"  onChange={formik.handleChange}  value={formik.values.billingstate}   label={$t('billingstate')} type="text" placeholder={$t('enterBillingstate')}        className={inputClassName(formik?.errors?.billingstate)} />
                                                <ErrorMessage name="billingstate" component="span" className="p-error" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="formgrid grid">
                                            <div className="col-12 md:col-3">
                                                {$t('billingcountry')} 
                                            </div>
                                            <div className="col-12 md:col-9">
                                                <InputText name="billingcountry"  onChange={formik.handleChange}  value={formik.values.billingcountry}   label={$t('billingcountry')} type="text" placeholder={$t('enterBillingcountry')}        className={inputClassName(formik?.errors?.billingcountry)} />
                                                <ErrorMessage name="billingcountry" component="span" className="p-error" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="formgrid grid">
                                            <div className="col-12 md:col-3">
                                                {$t('billingpostalcode')} 
                                            </div>
                                            <div className="col-12 md:col-9">
                                                <InputText name="billingpostalcode"  onChange={formik.handleChange}  value={formik.values.billingpostalcode}   label={$t('billingpostalcode')} type="text" placeholder={$t('enterBillingpostalcode')}        className={inputClassName(formik?.errors?.billingpostalcode)} />
                                                <ErrorMessage name="billingpostalcode" component="span" className="p-error" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="formgrid grid">
                                            <div className="col-12 md:col-3">
                                                {$t('total')} *
                                            </div>
                                            <div className="col-12 md:col-9">
                                                <InputText name="total"  onChange={formik.handleChange}  value={formik.values.total}   label={$t('total')} type="text" placeholder={$t('enterTotal')}        className={inputClassName(formik?.errors?.total)} />
                                                <ErrorMessage name="total" component="span" className="p-error" />
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
InvoiceAddPage.defaultProps = {
	primaryKey: 'invoiceid',
	pageName: 'invoice',
	apiPath: 'invoice/add',
	routeName: 'invoiceadd',
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
export default InvoiceAddPage;
