import { Formik, Form, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { $t } from 'hooks/i18n';
import { Button } from 'primereact/button';
import { Calendar } from 'primereact/calendar';
import { DataSource } from 'components/DataSource';
import { Dropdown } from 'primereact/dropdown';
import { InputText } from 'primereact/inputtext';
import { PageRequestError } from 'components/PageRequestError';
import { ProgressSpinner } from 'primereact/progressspinner';
import { Title } from 'components/Title';
import useApp from 'hooks/useApp';

import useEditPage from 'hooks/useEditPage';
const InvoiceEditPage = (props) => {
		const app = useApp();
	// form validation schema
	const validationSchema = yup.object().shape({
		customerid: yup.string().required().label($t('customerid')),
		invoicedate: yup.string().required().label($t('invoicedate')),
		billingaddress: yup.string().nullable().label($t('billingaddress')),
		billingcity: yup.string().nullable().label($t('billingcity')),
		billingstate: yup.string().nullable().label($t('billingstate')),
		billingcountry: yup.string().nullable().label($t('billingcountry')),
		billingpostalcode: yup.string().nullable().label($t('billingpostalcode')),
		total: yup.string().required().label($t('total'))
	});
	// form default values
	const formDefaultValues = {
		customerid: '', 
		invoicedate: new Date(), 
		billingaddress: '', 
		billingcity: '', 
		billingstate: '', 
		billingcountry: '', 
		billingpostalcode: '', 
		total: '', 
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
			app.navigate(`/invoice`);
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
<main id="InvoiceEditPage" className="main-page">
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
                    <Title title={$t('editInvoice')}   titleClass="text-2xl text-primary font-bold" subTitleClass="text-500"      separator={false} />
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
                                                {$t('customerid')} *
                                            </div>
                                            <div className="col-12 md:col-9">
                                                <DataSource   apiPath="components_data/customerid_option_list"  >
                                                    {
                                                    ({ response }) => 
                                                    <>
                                                    <Dropdown  name="customerid"     optionLabel="label" optionValue="value" value={formik.values.customerid} onChange={formik.handleChange} options={response} label={$t('customerid')}  placeholder={$t('selectAValue')}  className={inputClassName(formik?.errors?.customerid)}   />
                                                    <ErrorMessage name="customerid" component="span" className="p-error" />
                                                    </>
                                                    }
                                                </DataSource>
                                            </div>
                                        </div>
                                    </div>
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
InvoiceEditPage.defaultProps = {
	primaryKey: 'invoiceid',
	pageName: 'invoice',
	apiPath: 'invoice/edit',
	routeName: 'invoiceedit',
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
export default InvoiceEditPage;
