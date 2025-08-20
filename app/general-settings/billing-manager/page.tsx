'use client';
import {
  Box,
  Typography,
  Card,
  CardContent,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormControlLabel,
  Radio,
  RadioGroup,
  FormLabel,
  Grid,
} from '@mui/material';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { useRouter } from "next/navigation";

// Validation schema for form validation Using Yup
const validationSchema = Yup.object({
  hsnCode: Yup.string().required('HSN Code is required'),
  sacCode: Yup.string().required('SAC Code is required'),
  dateFormat: Yup.string().required('Date Format is required'),
  cgst: Yup.number()
    .required('CGST is required')
    .min(0, 'CGST must be >= 0')
    .max(100, 'CGST must be <= 100'),
  igst: Yup.number()
    .min(0, 'IGST must be >= 0')
    .max(100, 'IGST must be <= 100'),
  sgst: Yup.number()
    .required('SGST is required')
    .min(0, 'SGST must be >= 0')
    .max(100, 'SGST must be <= 100'),
  invoicePrefix: Yup.string().required('Invoice Prefix is required'),
  tds: Yup.string().required('TDS selection is required'),
  agr: Yup.string().required('AGR selection is required'),
  paymentGateway: Yup.string().required('Payment gateway selection is required'),
  billingDescription: Yup.string().required('Billing Description is required'),
  billingTerms: Yup.string().required('Billing Terms and Conditions is required'),
});

// Initial values for the form
const BillingManager = () => {
  const initialValues = {
    hsnCode: '',
    sacCode: '',
    dateFormat: '',
    cgst: '',
    igst: '',
    sgst: '',
    invoicePrefix: '',
    tds: 'yes',
    agr: 'yes',
    paymentGateway: 'wallet',
    billingDescription: '',
    billingTerms: '',
  };

  const router = useRouter();

  // Handle form submission here
  const handleSubmit = (values: any) => {
    console.log('Form submitted:', values);
  };

  //Redirect to general settings when clicked in Cancel button
  const handleCancel = () => {
    router.push("/general-settings");
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" sx={{ mb: 3, fontWeight: 600 }}>
        Billing Manager
      </Typography>
      <Typography variant="body2" sx={{ mb: 3, color: 'text.secondary' }}>
        Billing Details
      </Typography>

      <Card>
        <CardContent sx={{ p: 4 }}>
          <Typography 
            variant="h6" 
            sx={{ 
              mb: 3, 
              pb: 1, 
              borderBottom: 2, 
              borderColor: 'primary.main',
              color: 'primary.main',
              fontWeight: 600,
            }}
          >
            Billing Details
          </Typography>

          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ values, errors, touched, handleChange, handleBlur, setFieldValue }) => (
              <Form>
                <Grid container spacing={3}>
                  {/* Row 1 */}
                  <Grid item xs={12} md={4}>
                    <TextField
                      fullWidth
                      name="hsnCode"
                      label="HSN Code"
                      placeholder="HSN Code"
                      value={values.hsnCode}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched.hsnCode && Boolean(errors.hsnCode)}
                      helperText={touched.hsnCode && errors.hsnCode}
                      required
                    />
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <TextField
                      fullWidth
                      name="sacCode"
                      label="SAC Code"
                      placeholder="SAC Code"
                      value={values.sacCode}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched.sacCode && Boolean(errors.sacCode)}
                      helperText={touched.sacCode && errors.sacCode}
                      required
                    />
                  </Grid>

                  <Grid item xs={12} md={4}>

                    <FormControl fullWidth error={touched.dateFormat && Boolean(errors.dateFormat)}>
                      <InputLabel>Date Format</InputLabel>
                      <Select
                        name="dateFormat"
                        value={values.dateFormat}
                        label="Date Format"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        required
                      >
                        <MenuItem value="dd-mm-yyyy">DD-MM-YYYY</MenuItem>
                        <MenuItem value="mm-dd-yyyy">MM-DD-YYYY</MenuItem>
                        <MenuItem value="yyyy-mm-dd">YYYY-MM-DD</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  {/* End Row 1 */}
                  
                  {/* Row 2 */}
                  <Grid item xs={12} md={4}>
                    <TextField
                      fullWidth
                      name="cgst"
                      label="CGST (%)"
                      placeholder="CGST"
                      type="number"
                      value={values.cgst}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched.cgst && Boolean(errors.cgst)}
                      helperText={touched.cgst && errors.cgst}
                      required
                    />
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <TextField
                      fullWidth
                      name="sgst"
                      label="SGST (%)"
                      placeholder="SGST"
                      type="number"
                      value={values.sgst}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched.sgst && Boolean(errors.sgst)}
                      helperText={touched.sgst && errors.sgst}
                      required
                    />
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <TextField
                      fullWidth
                      name="igst"
                      label="IGST (%)"
                      placeholder="IGST"
                      type="number"
                      value={values.igst}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched.igst && Boolean(errors.igst)}
                      helperText={touched.igst && errors.igst}
                    />
                  </Grid>
                  {/* Row 3 */}
                  <Grid item xs={12} md={6}>
                    <TextField
                      fullWidth
                      name="invoicePrefix"
                      label="Invoice Prefix"
                      placeholder="Invoice Prefix"
                      value={values.invoicePrefix}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched.invoicePrefix && Boolean(errors.invoicePrefix)}
                      helperText={touched.invoicePrefix && errors.invoicePrefix}
                      required
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Box sx={{ display: 'flex', gap: 4, alignItems: 'center', mt: 1 }}>
                      <Box>
                        <FormLabel component="legend" sx={{ fontWeight: 600, color: 'text.primary' }}>
                          TDS:
                        </FormLabel>
                        <RadioGroup
                          row
                          name="tds"
                          value={values.tds}
                          onChange={handleChange}
                        >
                          <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                          <FormControlLabel value="no" control={<Radio />} label="No" />
                        </RadioGroup>
                      </Box>
                      <Box>
                        <FormLabel component="legend" sx={{ fontWeight: 600, color: 'text.primary' }}>
                          AGR:
                        </FormLabel>
                        <RadioGroup
                          row
                          name="agr"
                          value={values.agr}
                          onChange={handleChange}
                        >
                          <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                          <FormControlLabel value="no" control={<Radio />} label="No" />
                        </RadioGroup>
                      </Box>
                    </Box>
                  </Grid>
                  {/* Remaining fields */}
                  <Grid item xs={12}>
                    <FormLabel component="legend" sx={{ fontWeight: 600, color: 'text.primary', mb: 2 }}>
                      Payment only to 'Wallet or Division' through payment Gateway:
                    </FormLabel>
                    <Box sx={{ mt: 1 }}>
                      <RadioGroup
                        name="paymentGateway"
                        value={values.paymentGateway}
                        onChange={handleChange}
                      >
                        <FormControlLabel 
                          value="wallet" 
                          control={<Radio />} 
                          label="Revenue Division - Wallet Only" 
                        />
                        <FormControlLabel 
                          value="bank" 
                          control={<Radio />} 
                          label="Revenue Division - Bank Deposit" 
                        />
                      </RadioGroup>
                    </Box>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      multiline
                      rows={4}
                      name="billingDescription"
                      label="Billing Description"
                      placeholder="Billing Description"
                      value={values.billingDescription}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched.billingDescription && Boolean(errors.billingDescription)}
                      helperText={touched.billingDescription && errors.billingDescription}
                      required
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      multiline
                      rows={4}
                      name="billingTerms"
                      label="Billing Terms And Conditions"
                      placeholder="Billing Terms And Conditions"
                      value={values.billingTerms}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched.billingTerms && Boolean(errors.billingTerms)}
                      helperText={touched.billingTerms && errors.billingTerms}
                      required
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Box sx={{ display: 'flex', gap: 2, justifyContent: 'flex-end', mt: 2 }}>
                      <Button variant="outlined" size="large" onClick={handleCancel}>
                        Cancel
                      </Button>
                      <Button variant="contained" type="submit" size="large">
                        Save Changes
                      </Button>
                    </Box>
                  </Grid>
                </Grid>
              </Form>
            )}
          </Formik>
        </CardContent>
      </Card>
    </Box>
  );
};

export default BillingManager;