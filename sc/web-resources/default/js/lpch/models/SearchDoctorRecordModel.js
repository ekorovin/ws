lpch.SearchDoctorRecordModel = Backbone.Model.extend({
    defaults: {
    	"id":"abanti-chaudhuri",
        "title":"Abanti Chaudhuri",
        "path":"/templatedata/Entities/CareGiver/data/content-public/abanti-chaudhuri.xml",
        "content-type":"caregiver",
        "lang":"en_US",
        "description":"",
        "keywords":"",
        "name":"Abanti Chaudhuri",
        "mso-id":"41789",
        "type":"Doctor",
        "lang-spoken":"en",
        "quote":"",
        "introduction":"",
        "manual-links":"",
        "qualification-degrees":"",
        "qualification-titles":"",
        "qualification-specialities":"",
        "qualification-schooling":"",
        "address":"",
        "telecom":"",
        "hours":"",
        "db_id":"41789",
        "db_last_name":"Chaudhuri",
        "db_first_name":"Abanti",
        "db_middle_initial":"",
        "db_suffix":"",
        "db_degree":"MD",
        "db_administrativetitle":"",
        "db_academictitle":"Clinical Assistant Professor",
        "db_subspecialty1":"",
        "db_subspecialty2":"",
        "db_subspecialty3":"",
        "db_subspecialty4":"",
        "db_date_on_staff":"2010-09-01 00:00:00.000",
        "db_location1office_name":"Pediatric Nephrology Clinic",
        "db_researchinterest1":"",
        "db_researchinterest2":"",
        "db_researchinterest3":"",
        "db_researchinterest4":"",
        "db_clinicalphone":"6507240353",
        "db_physicianreferralphone":"8007565000",
        "db_fax_number":"6507216685",
        "db_faccode":"LPCH",
        "db_practicelocation":"S",
        "db_mailname":"Pediatric Nephrology",
        "db_mailaddress1":"300 Pasteur Dr MC 5208",
        "db_mailaddress2":"G306",
        "db_mailcity":"Stanford",
        "db_mailstate":"CA",
        "db_mailzip":"94305",
        "db_officephone":"6507237903",
        "db_gender":"F",
        "db_specialty":"Nephrology",
        "db_location1address1":"770 Welch Rd Ste 300",
        "db_location1address2":"",
        "db_location1city":"Palo Alto",
        "db_location1state":"CA",
        "db_location1zip":"94304",
        "db_specialtyid":["21",
          "25"],
        "db_modifier":["Pediatric",
          "Pediatric"],
        "db_searchSpecialty":["Kidney Transplantation",
          "Nephrology (Kidney)"],
        "db_location2address1":["Women & Children's Center"],
        "db_location2address2":["3700 California Street, B555"],
        "db_location2office_name":["California Pacific Medical Center"],
        "db_location2city":["San Francisco"],
        "db_location2state":["CA"],
        "db_location2zip":["94118"],
        "db_profEdu_universityName":["RG Kar Medical College, Calcutta University"],
        "db_profEdu_universityCity":[""],
        "db_profEdu_universityState":[""],
        "db_profEdu_universityThruData":["02/1994"],
        "db_residency_universityName":["Kaiser Foundation Hospital-Oakland",
          "Manchester University - St Mary's Hospital"],
        "db_residency_universityCity":["Oakland",
          "Manchester"],
        "db_residency_universityState":["CA",
          ""],
        "db_residency_universityThruData":["06/2007",
          "08/2003"],
        "db_fellowship_universityName":["Lucile Packard Children's Hospital"],
        "db_fellowship_universityCity":["Palo Alto"],
        "db_fellowship_universityState":["CA"],
        "db_fellowship_universityThruData":["06/2010"],
        "db_boardCert_specialtyName":["General Pediatrics"],
        "db_boardCert_boardName":["American Board of Pediatrics"],
        "db_boardCert_certifiedYear":["2007"],
        "db_photo_fileName":["chaudhuriAbanti.jpg"],
        "db_photo_associatedURL":["http://med.stanford.edu/profiles/Abanti_Chaudhuri/"],
        "db_photo_fileExists":["1"],
        "db_fellowship_type":["Fellowship"],
        "db_fellowship_university_name":["Lucile Packard Children's Hospital"],
        "db_fellowship_university_city":["Palo Alto"],
        "db_fellowship_university_state":["CA"],
        "db_fellowship_university_country":[""],
        "db_fellowship_university_thru_date":["06/2010"],
        "db_medical_education_type":["Medical Education"],
        "db_medical_education_university_name":["RG Kar Medical College, Calcutta University"],
        "db_medical_education_university_city":[""],
        "db_medical_education_university_state":[""],
        "db_medical_education_university_country":["India"],
        "db_medical_education_university_thru_date":["02/1994"],
        "db_residency_type":["Residency",
          "Residency"],
        "db_residency_university_name":["Kaiser Foundation Hospital-Oakland",
          "Manchester University - St Mary's Hospital"],
        "db_residency_university_city":["Oakland",
          "Manchester"],
        "db_residency_university_state":["CA",
          ""],
        "db_residency_university_country":["",
          "United Kingdom"],
        "db_residency_university_thru_date":["06/2007",
          "08/2003"]
    },
    initialize: function() {
    	if (this.get('lang-spoken') == '') {
    		this.set('lang-spoken', 'en');
    	}
    	this.getGPSLocation();
    },
    getGPSLocation: function() {
    	var _this = this;
    	// look up the GPS coords in the ZipCodeCollection
    	this.set('gpsLocation', module.view.model.getZipCodeGPSCoords(this.get('db_location1zip')));
    	
    	// Fail safe, if the zip code and gps coords do not exist in the ZipCodeCollection object
    	if (this.get('gpsLocation') == undefined) {
    		// use GoogleMaps API to get the lat/lng for the zip code
    		$.getJSON( "http://maps.googleapis.com/maps/api/geocode/json?address="+this.get('db_location1zip')+"&sensor=false", function( data ) {
    			_this.set('gpsLocation', new Backbone.Model({
    				"zip":_this.get('db_location1zip'),
    				"lat":data.results[0].geometry.location.lat,
    				"lng":data.results[0].geometry.location.lng
    			}));
    		});
    	}
    },
    getDistance: function(lat1, lng1) {
    	var pi = Math.PI;
    	var lat2 = this.get('gpsLocation').get('lat');
    	var lng2 = this.get('gpsLocation').get('lng');
    	var x = Math.sin(lat1 * pi/180) * Math.sin(lat2 * pi/180) + Math.cos(lat1 *pi/180) * Math.cos(lat2 * pi/180) * Math.cos(Math.abs((lng2 * pi/180) - (lng1 *pi/180)));
    	x = Math.atan((Math.sqrt(1- Math.pow(x, 2))) / x);  
    	return ( 1.852 * 60.0 * ((x/pi)*180) ) / 1.609344;
    }
    
});