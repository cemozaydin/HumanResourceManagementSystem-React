import React, { useState, useEffect } from "react";
import JobPostingService from "../services/jobPostingService";
import EmployerService from "../services/employerService";
import JobTypeService from "../services/jobTypeService";
import WorkplaceTypeService from "../services/workplaceTypeService";
 import CityService from "../services/cityService";
import CurrencyService from "../services/currencyService";
import JobTitleService from "../services/jobTitleService";
import { useFormik} from "formik";
import * as Yup from "yup";
import { Button, Dropdown, Input, Segment, TextArea,Form, Radio } from "semantic-ui-react";


export default function JobPostingAdd() {
  const [employers, setEmployers] = useState([]);
  const [jobTitles, setJobTitles] = useState([]);
  const [jobTypes, setJobTypes] = useState([]);
  const [workplaceTypes, setWorkplaceTypes] = useState([]);
  const [cities, setCities] = useState([]);
  const [currencies, setCurrencies] = useState([]);
  
  let jobPostingService = new JobPostingService();

   useEffect(() => {     
     let employerService = new EmployerService();
     let jobtitleService = new JobTitleService();
     let jobtypeService = new JobTypeService();
     let workplacetypeService = new WorkplaceTypeService();
     let cityService = new CityService();
     let currencyService = new CurrencyService();

    employerService
      .getEmployer()
      .then((result) => setEmployers(result.data.data));
     jobtitleService
       .getJobTitles()
       .then((result) => setJobTitles(result.data.data));
    jobtypeService.getAll().then((result) => setJobTypes(result.data.data));
    workplacetypeService
      .getWorkplaceTypes()
      .then((result) => setWorkplaceTypes(result.data.data));
     cityService.getAll().then((result) => setCities(result.data.data));
     currencyService.getAll().then((result) => setCurrencies(result.data.data));
   }, []);

  const jobTitleOptions = jobTitles.map((jobTitle) => ({
    key: jobTitle.id,
    text: jobTitle.title,
    value: jobTitle.id,
  }));

  const jobtypeOptions = jobTypes.map((jobtypeService, keyIndex) => ({
    key: keyIndex,
    text: jobtypeService.jobTypeDesc,
    value: jobtypeService.id,
  }));

  const workplaceTypeOptions = workplaceTypes.map(
    (workplacetypeService, keyIndex) => ({
      key: keyIndex,
      text: workplacetypeService.workplaceDesc,
      value: workplacetypeService.id,
    })
  );

  const cityOptions = cities.map((city,keyIndex) => ({
    key: keyIndex,
    text: city.cityName,
    value: city.id,
  }));


  const currencyOptions = currencies.map((currencyService, keyIndex) => ({
    key: keyIndex,
    text: currencyService.currencyCode,
    value: currencyService.id,
  }));

  const employerOptions = employers.map((employerService, keyIndex) => ({
    key: keyIndex,
    text: employerService.companyName,
    value: employerService.id,
  }));
  

  const formik = useFormik({
    initialValues: {
      employerId: 4,
      cityId: "",
      jobTitleId: "",
      jobPostingTitle: "",
      jobPostingDescription: "",
      minSalary: "",
      maxSalary: "",
      currencyId: "",
      jobPostingDeadline: "",
      numberOfOpenPosition: "",
      jobTypeId: "",
      workplaceTypeId: "",
      isActive: false
    },
    validationSchema : Yup.object({
      cityId: Yup.number().required("şehir zorunlu"),
      jobTitleId: Yup.number().required("Lütfen Pozisyon seçiniz."),
      jobPostingTitle: Yup.string().max(150, "İlan başlığı 60 karakteri geçemez.").required("İlan başlığı giriniz."),
      jobPostingDescription: Yup.string().max(500, "İlan detayı 500 karakteri geçemez.").required("İlan açıklaması giriniz."),
      minSalary: Yup.number().required("Lütfen minimum maaş bilgisi giriniz."),
      maxSalary: Yup.number().required("Lütfen maksimum maaş bilgisi giriniz."),
      currencyId: Yup.number().required("Lütfen para birimi seçiniz."),
      jobPostingDeadline: Yup.date().nullable().required("Lütfen ilan için son başvuru tarihi belirleyiniz."),
      numberOfOpenPosition: Yup.number().required("Lütfen pozisyon için ihtiyaç duyduğunuz personel sayısı giriniz."),
      jobTypeId: Yup.number().required("Lütfen çalışma tipini seçiniz."),
      workplaceTypeId: Yup.number().required("Lütfen çalışma şeklini seçiniz."),
      isActive: Yup.boolean().required("Lütfen ilanı onaya göndermek isteyip istemediğinizi seçiniz.")
    }),
    onSubmit: values => {
      //console.log(values);
      console.table(values);
      let jobPosting = {
        //active:values.isActive,
        city:{id:  parseInt(values.cityId)},
        currency:{id: parseInt(values.currencyId)},
        employer:{id :  parseInt(values.employerId)},
        jobTitle:{id :  parseInt(values.jobTitleId)},
        jobType:{id:  parseInt(values.jobTypeId)},
        max_salary:  parseFloat( values.minSalary),
        min_salary:  parseFloat(values.maxSalary),
        numberOfOpenPositions:  parseInt(values.numberOfOpenPosition),
        postingDeadline: values.jobPostingDeadline,
        postingDescription: values.jobPostingDescription,
        postingTitle: values.jobPostingTitle,
        workplaceType: {id :  parseInt(values.workplaceTypeId)}
        
    };
    console.log(JSON.stringify(jobPosting))
    jobPostingService.addJobPostings(jobPosting).then((result) => console.log(result.data.message));
    //alert(JSON.stringify(values, null, 2));
    }
  });


  return (
   <div>
      <Segment.Group>
                <Segment raised inverted color="olive"><h3 className="headerStyle">İş İlanı Ekle</h3></Segment>
                <Segment>
                    <Form onSubmit={formik.handleSubmit}>
                        <div style={{ textAlign: "left", fontFamily: "Arial", fontWeight: "bold", padding: "3px" }} >
                            
                            <div >
                                <label>Şehir:</label>
                                <Dropdown style={{ marginRight: "1em", fontWeight: "lighter", marginBottom: "1em" }}
                                    button
                                    placeholder='Şehir Seçiniz...'
                                    fluid
                                    search
                                    selection
                                    id="cityId"
                                    options={cityOptions}
                                    onChange={(event, data) =>
                                        formik.setFieldValue("cityId", data.value)
                                    }
                                    value={formik.values.cityId}
                                />
                                {formik.errors.cityId && formik.touched.cityId && (
                                    <p style={{ color: "red" }}>{formik.errors.cityId}</p>
                                )}
                            </div>

                            <div>
                                <label>İş Pozisyonu:</label>
                                <Dropdown style={{ marginRight: "1em", marginBottom: "1em" ,fontWeight: "lighter" }}
                                    button
                                    placeholder='İş Pozisyonu Seçiniz...'
                                    fluid
                                    search
                                    selection
                                    id="jobTitleId"
                                    options={jobTitleOptions}
                                    onChange={(event, data) =>
                                        formik.setFieldValue("jobTitleId", data.value)
                                    }
                                    value={formik.values.jobTitleId}
                                />
                                {formik.errors.jobTitleId && formik.touched.jobTitleId && (
                                    <p style={{ color: "red" }}>{formik.errors.jobTitleId}</p>
                                )}     
                                                          
                            </div>

                            <div>
                                <label>Çalışma Tipi:</label>
                                <Dropdown style={{ marginRight: "1em", marginBottom: "1em" , fontWeight: "lighter" }}
                                    button
                                    placeholder='Çalışma Tipini Seçiniz...'
                                    fluid
                                    search
                                    selection
                                    id="jobTypeId"
                                    options={jobtypeOptions}
                                    onChange={(event, data) =>
                                        formik.setFieldValue("jobTypeId", data.value)
                                    }
                                    value={formik.values.jobTypeId}
                                    required
                                />
                                {formik.errors.jobTypeId && formik.touched.jobTypeId && (
                                    <p style={{ color: "red" }}>{formik.errors.jobTypeId}</p>
                                )}
                            </div>

                            <div>
                                <label>Çalışma Zamanı Tipi:</label>
                                <Dropdown style={{ marginRight: "1em", marginBottom: "1em" , fontWeight: "lighter" }}
                                    button
                                    placeholder='Çalışma Şeklini Seçiniz...'
                                    fluid
                                    search
                                    selection
                                    id="workplaceTypeId"
                                    options={workplaceTypeOptions}
                                    onChange={(event, data) =>
                                        formik.setFieldValue("workplaceTypeId", data.value)
                                    }
                                    value={formik.values.workplaceTypeId}
                                />
                                {formik.errors.workplaceTypeId && formik.touched.workplaceTypeId && (
                                    <p style={{ color: "red" }}>{formik.errors.workplaceTypeId}</p>
                                )}
                            </div>

                            <div>
                                <label>Minimum Maaş:</label>
                                <Input id="minSalary" placeholder="Minimum Maaş..." fluid style={{ marginRight: "1em", marginBottom: "1em" }} onChange={formik.handleChange} value={formik.values.minSalary}></Input>
                                {formik.errors.minSalary && formik.touched.minSalary && (
                                    <p style={{ color: "red" }}>{formik.errors.minSalary}</p>
                                )}
                            </div>

                            <div >
                                <label>Maksimum Maaş:</label>
                                <Input id="maxSalary" placeholder="Maksimum Maaş..." fluid style={{ marginRight: "1em", marginBottom: "1em" }} onChange={formik.handleChange} value={formik.values.maxSalary}></Input>
                                {formik.errors.maxSalary && formik.touched.maxSalary && (
                                    <p style={{ color: "red" }}>{formik.errors.maxSalary}</p>
                                )}

                                <label>Para Birimi</label>
                                <Dropdown style={{ marginRight: "1em", marginBottom: "1em" , fontWeight: "lighter" }}
                                    button
                                    placeholder='Para Birimi...'
                                    fluid
                                    search
                                    selection
                                    id="currencyId"
                                    options={currencyOptions}
                                    onChange={(event, data) =>
                                        formik.setFieldValue("currencyId", data.value)
                                    }
                                    value={formik.values.currencyId}
                                />
                                {formik.errors.currencyId && formik.touched.currencyId && (
                                    <p style={{ color: "red" }}>{formik.errors.currencyId}</p>
                                )}
                            </div>

                            <div>
                                <label>Alınacak Personel Sayısı:</label>
                                <Input id="numberOfOpenPosition" placeholder="Alınacak Personel Sayısı..." fluid style={{ marginRight: "1em", marginBottom: "1em" }} onChange={formik.handleChange} value={formik.values.numberOfOpenPosition}></Input>
                                {formik.errors.numberOfOpenPosition && formik.touched.numberOfOpenPosition && (
                                    <p style={{ color: "red" }}>{formik.errors.numberOfOpenPosition}</p>
                                )}
                            </div>

                            <div>
                                <label>Son Başvuru Tarihi:</label>
                                <Input type="date" id="jobPostingDeadline" placeholder="Son Başvuru Tarihi..." fluid style={{ marginRight: "1em", marginBottom: "1em"  }} onChange={formik.handleChange} value={formik.values.jobPostingDeadline}></Input>
                                {formik.errors.jobPostingDeadline && formik.touched.jobPostingDeadline && (
                                    <p style={{ color: "red" }}>{formik.errors.jobPostingDeadline}</p>
                                )}
                            </div>

                            

                            <div>
                                <label>İlan Başlığı:</label>
                                <Input id="jobPostingTitle" placeholder="İlan Başlığı..." fluid style={{ marginRight: "1em", marginBottom: "1em"  }} onChange={formik.handleChange} value={formik.values.jobPostingTitle}></Input>
                                {formik.errors.jobPostingTitle && formik.touched.jobPostingTitle && (
                                    <p style={{ color: "red" }}>{formik.errors.jobPostingTitle}</p>
                                )}
                            </div>

                            <div>
                                <label>Açıklama:</label>
                                <TextArea id="jobPostingDescription" placeholder="Açıklama..." style={{ marginRight: "1em", marginBottom: "1em" , minHeight: 100 }} onChange={formik.handleChange} value={formik.values.jobPostingDescription}></TextArea>
                                {formik.errors.jobPostingDescription && formik.touched.jobPostingDescription && (
                                    <p style={{ color: "red" }}>{formik.errors.jobPostingDescription}</p>
                                )}
                            </div>
                           
                            <div>
                                <label>Pasif/Aktif: </label>                            
                            </div>                            
                                <div className="ui fitted toggle checkbox">
                            <Radio toggle/>                                
                            </div>

                        </div>
                        <Button type="submit" style={{ backgroundColor: "#780000", color: "white", marginBottom: "0.001em" }} >EKLE</Button>
                    </Form>
                </Segment>
            </Segment.Group>

   </div>

  )
}       

