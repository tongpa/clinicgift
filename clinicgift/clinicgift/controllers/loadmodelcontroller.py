# -*- coding: utf-8 -*-

from tg import expose, redirect, validate, flash, url
# from tg.i18n import ugettext as _
# from tg import predicates
from clinicgift import model

from clinicgift.lib.base import BaseController
# from clinicgift.model import DBSession
__all__ = ['ScriptModelController']
class ScriptModelController(BaseController):
    # Uncomment this line if your controller requires an authenticated user
    # allow_only = predicates.not_anonymous()
    
    @expose('clinicgift.templates.clinic')
    def index(self, **kw):
        return dict(page='desktop')

    @expose('json')
    def getPrefixData(self, *args, **kw):
        self.data = model.Prefix.getAll();
        return dict(clinic=self.data , total = len(self.data));

    @expose('json')
    def getGenderData(self, *args, **kw):
        self.data = model.Gender.getAll();
        return dict(clinic=self.data , total = len(self.data));

    @expose('json')
    def getMarriageData(self, *args, **kw):
        self.data = model.Marriage.getAll();
        return dict(clinic=self.data , total = len(self.data));

    @expose('json')
    def getNationData(self, *args, **kw):
        self.data = model.Nation.getAll();
        return dict(clinic=self.data , total = len(self.data));

    @expose('json')
    def getReligionData(self, *args, **kw):
        self.data = model.Religion.getAll();
        return dict(clinic=self.data , total = len(self.data));

    @expose('json')
    def getBloodGroupData(self, *args, **kw):
        self.data = model.BloodGroup.getAll();
        return dict(clinic=self.data , total = len(self.data));

    @expose('json')
    def getClinicData(self, *args, **kw):
        self.data = model.Clinic.getAll();
        return dict(clinic=self.data , total = len(self.data));

    @expose('json')
    def getDoctorData(self, *args, **kw):
        self.data = model.Doctor.getAll();
        return dict(clinic=self.data , total = len(self.data));

    @expose('json')
    def getCauseData(self, *args, **kw):
        self.data = model.Cause.getAll();
        return dict(clinic=self.data , total = len(self.data));

    @expose('json')
    def getItemTypeData(self, *args, **kw):
        self.data = model.ItemType.getAll();
        return dict(clinic=self.data , total = len(self.data));

    @expose('json')
    def getServicePointData(self, *args, **kw):
        self.data = model.ServicePoint.getAll();
        return dict(clinic=self.data , total = len(self.data));
    
    @expose('json')
    def getPersonData(self, *args, **kw):
        self.data,self.len = model.Person.getbysearch();
        return dict(clinic=self.data , total = self.len);
    
    
    @expose('json')
    def getServiceData(self, *args, **kw):
        self.data,self.len = model.VisitService.getbysearch(idsearch = kw.get('idsearch'));
        return dict(clinic=self.data , total = self.len);
    
    @expose('json')
    def getVitalSignData(self, *args, **kw):
        self.data,self.len = model.VisitVitalSign.getbysearch(idsearch = kw.get('idsearch'));
        return dict(clinic=self.data , total = self.len);
    