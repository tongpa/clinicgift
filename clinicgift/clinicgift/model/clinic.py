# -*- coding: utf-8 -*-

import os
from datetime import datetime
from hashlib import sha256
__all__ = ['Person', 'Visit', 'Appointment', 'VisitService', 'VisitVitalSign','VisitOrder', 'VisitBilling',
           'Item', 'Prefix','Gender','Marriage','Nation','Religion','BloodGroup','Clinic','ServicePoint',
           'MapDoctorClinic','Doctor','MapDoctor','Cause','ItemType'
           ]

from sqlalchemy import Table, ForeignKey, Column,sql, func, update 
from sqlalchemy.types import Unicode, Integer, DateTime, Text,Numeric,TIMESTAMP
from sqlalchemy.orm import relation, synonym
from datetime import date
from clinicgift.model import DeclarativeBase, metadata, DBSession

class Prefix (DeclarativeBase):

    __tablename__ = 'prefix'

    id_prefix = Column(Integer, autoincrement=True, primary_key=True)
    description = Column(Unicode(255))
    create_date  = Column( TIMESTAMP(timezone=True), nullable=True ,default=sql.func.current_timestamp())
    update_date = Column(TIMESTAMP(timezone=True), nullable=True,onupdate=sql.func.current_timestamp() )
    
    def __repr__(self):
        return '<Prefix: name=%s>' % repr(self.description)

    def __unicode__(self):
        return self.description
    
    @classmethod
    def getAll(cls):
        data = DBSession.query(cls).all();
        record = []
        for d in data:
            record.append(d.to_json())
        return record
    
    def to_json(self):
        return {"id": self.id_prefix, "description": self.description};

class Gender (DeclarativeBase):

    __tablename__ = 'gender'

    id_gender = Column(Integer, autoincrement=True, primary_key=True)
    description = Column(Unicode(255))
    create_date  = Column( TIMESTAMP(timezone=True), nullable=True ,default=sql.func.current_timestamp())
    update_date = Column(TIMESTAMP(timezone=True), nullable=True,onupdate=sql.func.current_timestamp() )
    
    def __repr__(self):
        return '<Gender: name=%s>' % repr(self.description)

    def __unicode__(self):
        return self.description

    @classmethod
    def getAll(cls):
        data = DBSession.query(cls).all();
        record = []
        for d in data:
            record.append(d.to_json())
        return record

    def to_json(self):
        return {"id": self.id_gender, "description": self.description};

class Marriage (DeclarativeBase):

    __tablename__ = 'marriage'

    id_marriage = Column(Integer, autoincrement=True, primary_key=True)
    description = Column(Unicode(255))
    create_date  = Column( TIMESTAMP(timezone=True), nullable=True ,default=sql.func.current_timestamp())
    update_date = Column(TIMESTAMP(timezone=True), nullable=True,onupdate=sql.func.current_timestamp() )
    
    def __repr__(self):
        return '<Marriage: name=%s>' % repr(self.description)

    def __unicode__(self):
        return self.description

    @classmethod
    def getAll(cls):
        data = DBSession.query(cls).all();
        record = []
        for d in data:
            record.append(d.to_json())
        return record

    def to_json(self):
        return {"id": self.id_marriage, "description": self.description};

class Nation (DeclarativeBase):

    __tablename__ = 'nation'

    id_nation = Column(Integer, autoincrement=True, primary_key=True)
    description = Column(Unicode(255))
    create_date  = Column( TIMESTAMP(timezone=True), nullable=True ,default=sql.func.current_timestamp())
    update_date = Column(TIMESTAMP(timezone=True), nullable=True,onupdate=sql.func.current_timestamp() )
    
    def __repr__(self):
        return '<Nation: name=%s>' % repr(self.description)

    def __unicode__(self):
        return self.description

    @classmethod
    def getAll(cls):
        data = DBSession.query(cls).all();
        record = []
        for d in data:
            record.append(d.to_json())
        return record

    def to_json(self):
        return {"id": self.id_nation, "description": self.description};

class Religion (DeclarativeBase):

    __tablename__ = 'religion'

    id_religion = Column(Integer, autoincrement=True, primary_key=True)
    description = Column(Unicode(255))
    create_date  = Column( TIMESTAMP(timezone=True), nullable=True ,default=sql.func.current_timestamp())
    update_date = Column(TIMESTAMP(timezone=True), nullable=True,onupdate=sql.func.current_timestamp() )
    
    def __repr__(self):
        return '<Religion: name=%s>' % repr(self.description)

    def __unicode__(self):
        return self.description

    @classmethod
    def getAll(cls):
        data = DBSession.query(cls).all();
        record = []
        for d in data:
            record.append(d.to_json())
        return record

    def to_json(self):
        return {"id": self.id_religion, "description": self.description};

class BloodGroup (DeclarativeBase):

    __tablename__ = 'bloodgroup'

    id_bloodgroup = Column(Integer, autoincrement=True, primary_key=True)
    description = Column(Unicode(255))
    create_date  = Column( TIMESTAMP(timezone=True), nullable=True ,default=sql.func.current_timestamp())
    update_date = Column(TIMESTAMP(timezone=True), nullable=True,onupdate=sql.func.current_timestamp() )
    
    def __repr__(self):
        return '<Bloodgroup: name=%s>' % repr(self.description)

    def __unicode__(self):
        return self.description

    @classmethod
    def getAll(cls):
        data = DBSession.query(cls).all();
        record = []
        for d in data:
            record.append(d.to_json())
        return record

    def to_json(self):
        return {"id": self.id_bloodgroup, "description": self.description};

class Clinic (DeclarativeBase):

    __tablename__ = 'clinic'

    id_clinic = Column(Integer, autoincrement=True, primary_key=True)
    description = Column(Unicode(255))
    create_date  = Column( TIMESTAMP(timezone=True), nullable=True ,default=sql.func.current_timestamp())
    update_date = Column(TIMESTAMP(timezone=True), nullable=True,onupdate=sql.func.current_timestamp() )
    
    def __repr__(self):
        return '<Clinic: name=%s>' % repr(self.description)

    def __unicode__(self):
        return self.description

    @classmethod
    def getAll(cls):
        data = DBSession.query(cls).all();
        record = []
        for d in data:
            record.append(d.to_json())
        return record

    def to_json(self):
        return {"id": self.id_clinic, "description": self.description};

class MapDoctorClinic(DeclarativeBase):
    
    __tablename__ = 'map_doctor_clinic'
    id_doctor_clinic = Column(Integer, autoincrement=True, primary_key=True)
    
    id_clinic = Column(Integer, unique=True, nullable=False)
    id_doctor = Column(Integer, unique=True, nullable=False)
    
    create_date  = Column( TIMESTAMP(timezone=True), nullable=True ,default=sql.func.current_timestamp())
    update_date = Column(TIMESTAMP(timezone=True), nullable=True,onupdate=sql.func.current_timestamp() )
    
    def __repr__(self):
        return '<MapDoctorClinic: name=%s>' % repr(self.id_doctor_clinic)

    def __unicode__(self):
        return self.id_doctor_clinic

    @classmethod
    def getAll(cls):
        return DBSession.query(cls).all();

    def to_json(self):
        return {"id": self.id_doctor_clinic, "description": self.description};

class Doctor (DeclarativeBase):

    __tablename__ = 'doctor'

    id_doctor = Column(Integer, autoincrement=True, primary_key=True)
    description = Column(Unicode(255))
    create_date  = Column( TIMESTAMP(timezone=True), nullable=True ,default=sql.func.current_timestamp())
    update_date = Column(TIMESTAMP(timezone=True), nullable=True,onupdate=sql.func.current_timestamp() )
    
    def __repr__(self):
        return '<Doctor: name=%s>' % repr(self.description)

    def __unicode__(self):
        return self.description

    @classmethod
    def getAll(cls):
        data = DBSession.query(cls).all();
        record = []
        for d in data:
            record.append(d.to_json())
        return record

    def to_json(self):
        return {"id": self.id_doctor, "description": self.description};

class MapDoctor(DeclarativeBase):
    
    __tablename__ = 'map_user_doctor'

    id_doctor = Column(Integer, autoincrement=True, primary_key=True)
    user_id = Column(Integer, unique=True, nullable=False)
    
    create_date  = Column( TIMESTAMP(timezone=True), nullable=True ,default=sql.func.current_timestamp())
    update_date = Column(TIMESTAMP(timezone=True), nullable=True,onupdate=sql.func.current_timestamp() )
    
    def __repr__(self):
        return '<MapDoctor: name=%s>' % repr(self.id_doctor)

    def __unicode__(self):
        return self.id_doctor
 
    @classmethod
    def getAll(cls):
        return DBSession.query(cls).all();

    def to_json(self):
        return {"id": self.id_doctor, "description": self.description};

class Cause (DeclarativeBase):

    __tablename__ = 'cause'

    id_cause = Column(Integer, autoincrement=True, primary_key=True)
    description = Column(Unicode(255))
    create_date  = Column( TIMESTAMP(timezone=True), nullable=True ,default=sql.func.current_timestamp())
    update_date = Column(TIMESTAMP(timezone=True), nullable=True,onupdate=sql.func.current_timestamp() )
    
    def __repr__(self):
        return '<Cause: name=%s>' % repr(self.description)

    def __unicode__(self):
        return self.description

    @classmethod
    def getAll(cls):
        data = DBSession.query(cls).all();
        record = []
        for d in data:
            record.append(d.to_json())
        return record

    def to_json(self):
        return {"id": self.id_cause, "description": self.description};

class ItemType (DeclarativeBase):

    __tablename__ = 'item_type'

    id_item_type = Column(Integer, autoincrement=True, primary_key=True)
    description = Column(Unicode(255))
    create_date  = Column( TIMESTAMP(timezone=True), nullable=True ,default=sql.func.current_timestamp())
    update_date = Column(TIMESTAMP(timezone=True), nullable=True,onupdate=sql.func.current_timestamp() )
    
    def __repr__(self):
        return '<Prefix: name=%s>' % repr(self.description)

    def __unicode__(self):
        return self.description

    @classmethod
    def getAll(cls):
        data = DBSession.query(cls).all();
        record = []
        for d in data:
            record.append(d.to_json())
        return record

    def to_json(self):
        return {"id": self.id_item_type, "description": self.description};

class ServicePoint (DeclarativeBase):

    __tablename__ = 'service_point'

    id_service_point = Column(Integer, autoincrement=True, primary_key=True)
    description = Column(Unicode(255))
    create_date  = Column( TIMESTAMP(timezone=True), nullable=True ,default=sql.func.current_timestamp())
    update_date = Column(TIMESTAMP(timezone=True), nullable=True,onupdate=sql.func.current_timestamp() )
    
    def __repr__(self):
        return '<Prefix: name=%s>' % repr(self.description)

    def __unicode__(self):
        return self.description

    @classmethod
    def getAll(cls):
        data = DBSession.query(cls).all();
        record = []
        for d in data:
            record.append(d.to_json())
        return record

    def to_json(self):
        return {"id": self.id_service_point, "description": self.description};
    
class Person(DeclarativeBase):

    __tablename__ = 'person'

    id_person = Column(Integer, autoincrement=True, primary_key=True)
    id_prefix = Column( Integer,ForeignKey('prefix.id_prefix'), nullable=False, index=True) 
    prefix = relation('Prefix', backref='person_id_prefix')
    firstname = Column(Unicode(255))
    lastname = Column(Unicode(255))
    nickname = Column(Unicode(255))
    id_gender = Column( Integer,ForeignKey('gender.id_gender'), nullable=False, index=True) 
    gender = relation('Gender', backref='person_id_gender')
    birthdate = Column(DateTime)
    id_marriage =  Column( Integer,ForeignKey('marriage.id_marriage'), nullable=False, index=True) 
    id_nation = Column( Integer,ForeignKey('nation.id_nation'), nullable=False, index=True) 
    id_race = Column( Integer,ForeignKey('nation.id_nation'), nullable=False, index=True) 
    id_religion = Column( Integer,ForeignKey('religion.id_religion'), nullable=False, index=True) 
    id_bloodgroup =Column( Integer,ForeignKey('bloodgroup.id_bloodgroup'), nullable=False, index=True) 
    bloodgroup = relation('BloodGroup', backref='person_id_bloodgroup')
    bloodrh = Column(Unicode(255))
    drugalert = Column(Unicode(255))
    pid = Column(Unicode(255))
    email = Column(Unicode(255))
    
    
    create_date  = Column( TIMESTAMP(timezone=True), nullable=True ,default=sql.func.current_timestamp())
    update_date = Column(TIMESTAMP(timezone=True), nullable=True,onupdate=sql.func.current_timestamp() )
    
    def __init__(self,id_person = None, id_prefix = None, firstname = None,
    lastname = None,    nickname = None,    id_gender = None,    birthdate = None,    id_marriage = None, 
    id_nation = None ,    id_race = None ,
    id_religion = None,    id_bloodgroup = None,    bloodrh = None,    drugalert = None,    pid = None,    email = None):
        self.id_person = id_person if (len(id_person) >0) else None
        self.id_prefix = id_prefix if (len(id_prefix) >0) else None
        self.firstname = firstname
        self.lastname = lastname
        self.nickname = nickname
        self.id_gender = id_gender if (len(id_gender) >0) else None
        self.birthdate = birthdate
        self.id_marriage = id_marriage if (len(id_marriage) >0) else None
        self.id_nation = id_nation if (len(id_nation) >0) else None
        self.id_race = id_race if (len(id_race) >0) else None
        self.id_religion = id_religion if (len(id_religion) >0) else None
        self.id_bloodgroup = id_bloodgroup if (len(id_bloodgroup) >0) else None
        self.bloodrh = bloodrh
        self.drugalert = drugalert
        self.pid = pid
        self.email = email
        
    def __repr__(self):
        return '<Person: name=%s>' % repr(self.id_person)

    def __unicode__(self):
        return self.id_person
    
    def save (self):
        DBSession.add(self); 
        DBSession.flush() ;
    
    def updateall(self):
        print "update"
        return DBSession.merge(self,load=True)
    
      
    @classmethod
    def getbysearch(cls, search="", idsearch="", page=0, page_size=None): 
        
        print 'search %s' %(search)
        print 'idsearch %s' %(idsearch)
        if search is None : 
            search = ''
        query = DBSession.query(cls).filter(cls.firstname.like('%' + str(search) + '%'));
        if idsearch : 
            query = query.filter(cls.id_person == idsearch);
        
        
        
        query_total = query;                
        
        if page_size:
            query = query.limit(page_size)
        if page: 
            page = 0 if page < 0 else page;
            query = query.offset(page*page_size)
        
        values = query.all();  
        total = query_total.count();
          
        data = [];
        for v in values:
            data.append(v.to_json());
                         
        return data,total;
    
    def to_json(self):
        dict = {
                'id_person':self.id_person ,'id_prefix':self.id_prefix , 'firstname' :self.firstname, 'lastname':self.lastname ,    
                'nickname':self.nickname, 'id_gender' :self.id_gender, 'birthdate' :self.birthdate, 'id_marriage' :self.id_marriage, 
                'id_nation':self.id_nation, 'id_race' :self.id_race, 'id_religion':self.id_religion, 'id_bloodgroup':self.id_bloodgroup,
                'bloodrh':self.bloodrh, 'drugalert' :self.drugalert, 'pid':self.pid , 'email' :self.email,
                'prefix': self.prefix.description, 'gender' : self.gender.description, 'bloodgroup': self.bloodgroup.description
                }
        return dict;
      
class Visit(DeclarativeBase):

    __tablename__ = 'visit'
    
    id_visit = Column(Integer, autoincrement=True, primary_key=True)
    vn = Column(Unicode(255))
    hn = Column(Unicode(255))
    id_person = Column( Integer,ForeignKey('person.id_person'), nullable=False, index=True) 
    visit_date = Column(DateTime)
    visit_time = Column(DateTime)
    dx = Column(Unicode(255))
    create_date  = Column( TIMESTAMP(timezone=True), nullable=True ,default=sql.func.current_timestamp())
    update_date = Column(TIMESTAMP(timezone=True), nullable=True,onupdate=sql.func.current_timestamp() )
    
    def __init__(self,id_visit=None, id_person= None,dx=''):
        self.id_visit = id_visit if (id_visit and len(id_visit) >0) else None
        self.id_person = id_person if (id_person and len(id_person) >0) else None
        self.dx = dx
    def __repr__(self):
        return '<Visit: name=%s>' % repr(self.id_visit)

    def __unicode__(self):
        return self.permission_name
    
    def save (self):
        DBSession.add(self); 
        DBSession.flush() ;
    
    def updateall(self):
        print "update"
        return DBSession.merge(self,load=True)
    
class Appointment(DeclarativeBase):

    __tablename__ = 'appointment'

    id_appointment = Column(Integer, autoincrement=True, primary_key=True)
    id_person = Column( Integer,ForeignKey('person.id_person'), nullable=False, index=True) 
    id_visit = Column( Integer,ForeignKey('visit.id_visit'), nullable=False, index=True) 
    appointment_date = Column(DateTime)
    appointment_time = Column(DateTime)
    id_clinic = Column( Integer,ForeignKey('clinic.id_clinic'), nullable=False, index=True) 
    id_doctor = Column( Integer,ForeignKey('doctor.id_doctor'), nullable=False, index=True) 
    id_cause = Column( Integer,ForeignKey('cause.id_cause'), nullable=False, index=True) 
    id_creator = Column( Integer,ForeignKey('tg_user.user_id'), nullable=False, index=True) 
    creator = relation('User', backref='appointment_user_id')
    description = Column(Text)
    create_date  = Column( TIMESTAMP(timezone=True), nullable=True ,default=sql.func.current_timestamp())
    update_date = Column(TIMESTAMP(timezone=True), nullable=True,onupdate=sql.func.current_timestamp() )
    
    
    def __repr__(self):
        return '<Appointment: name=%s>' % repr(self.id_appointment)

    def __unicode__(self):
        return self.id_appointment

class VisitService(DeclarativeBase):

    __tablename__ = 'visit_service'
 
    id_service = Column(Integer, autoincrement=True, primary_key=True)
    id_clinic = Column( Integer,ForeignKey('clinic.id_clinic'), nullable=False, index=True) 
    id_service_point = Column( Integer,ForeignKey('service_point.id_service_point'), nullable=False, index=True) 
    id_doctor = Column( Integer,ForeignKey('doctor.id_doctor'), nullable=False, index=True) 
    doctor = relation('Doctor', backref='visit_service_id_doctor')
    
    start_date = Column(DateTime, default=datetime.now)
    service_date = Column(DateTime)
    finish_date = Column(DateTime)
    id_visit = Column( Integer,ForeignKey('visit.id_visit'), nullable=False, index=True)
    visit = relation('Visit', backref='visit_service_id_visit') 
    id_person = Column( Integer,ForeignKey('person.id_person'), nullable=False, index=True) 
    person = relation('Person', backref='visit_service_id_person')
    
    create_date  = Column( TIMESTAMP(timezone=True), nullable=True ,default=sql.func.current_timestamp())
    update_date = Column(TIMESTAMP(timezone=True), nullable=True,onupdate=sql.func.current_timestamp() )
    
    def __init__(self,id_service=None, id_clinic = None, id_service_point=None,id_doctor=None,
                 start_date =datetime.now(), service_date=None,finish_date=None, id_visit=None,id_person =None):
        self.id_service = id_service if (id_service and len(id_service) >0) else None
        self.id_clinic =  id_clinic if (id_clinic and len(id_clinic) >0) else None
        self.id_service_point = id_service_point if (id_service_point and len(id_service_point) >0) else None
        self.id_doctor = id_doctor if (id_doctor and len(id_doctor) >0) else None
        self.start_date = start_date
        self.service_date = service_date
        self.finish_date = finish_date
        self.id_visit =  id_visit if (id_visit and len(id_visit) >0) else None
        self.id_person =  id_person if (id_person and len(id_person) >0) else None
        
    def __repr__(self):
        return '<VisitService: name=%s>' % repr(self.id_service)

    def __unicode__(self):
        return self.id_service
    
    def save (self):
        DBSession.add(self); 
        DBSession.flush() ;
    
    def updateall(self):
        print "update"
        return DBSession.merge(self,load=True)
    
    @classmethod
    def updateFinishVisit(cls,id_visit):
        
        #ex = update(cls.__table__).where(
        #                                 sql.and_(
        #                                 cls.id_visit == str(id_visit), 
        #                                 cls.finish_date.is_(None), 
        #                                 func.date(cls.start_date) == date.today()
        #                                  ).values(finish_date = date.today())
        
        #DBSession.execute(ex)
        
        
        data = DBSession.query(cls).filter(cls.id_visit == str(id_visit),\
                                    cls.finish_date.is_(None),\
                                    func.date(cls.start_date) == date.today() )\
                                    .all()
                                    
        for d in data:
            d.finish_date = sql.func.current_timestamp()
        #                            .update({cls.finish_date:date.today() }, synchronize_session=False);
    
    @classmethod
    def getByVisit(cls,id_visit):
        return DBSession.query(cls).filter(cls.id_visit == str(id_visit),\
                                    cls.finish_date.is_(None),\
                                    func.date(cls.start_date) == date.today() ).all();
    @classmethod
    def getbysearch(cls, search="", idsearch="" ,page=0, page_size=None): 
    
        query = DBSession.query(cls).filter(cls.id_service_point == str(idsearch),\
                                            # cls.service_date.is_(None),\
                                            cls.finish_date.is_(None),\
                                            func.date(cls.start_date) == date.today()
                                            );
        query_total = query;                
        
        if page_size:
            query = query.limit(page_size)
        if page: 
            page = 0 if page < 0 else page;
            query = query.offset(page*page_size)
        
        values = query.all();  
        total = query_total.count();
          
        data = [];
        for v in values:
            data.append(v.to_json());
                         
        return data,total;
    
    def to_json(self):
        dict = {'id_service':self.id_service , 
                'id_clinic' :self.id_clinic, 
                'doctor':'' ,
                'start_date' : self.start_date,    
                'id_visit' : self.id_visit,    
                'id_person' : self.id_person,   
                'id_doctor' : self.id_doctor ,
                'patient_name' : ''
                }
        
        if(self.person):
            dict['patient_name'] = '%s %s' %(self.person.firstname , self.person.lastname )
        
        if(self.doctor):
            dict['doctor'] = '%s' %(self.doctor.description  )
        
        return dict;

class VisitVitalSign(DeclarativeBase):

    __tablename__ = 'visit_vitalsign'

    id_vitalsign = Column(Integer, autoincrement=True, primary_key=True)
    id_visit = Column( Integer,ForeignKey('visit.id_visit'), nullable=False, index=True) 
    weight = Column(Unicode(10))
    temperature = Column(Unicode(10))
    pulse = Column(Unicode(10))
    pressure = Column(Unicode(10))
    height = Column(Unicode(10))
    bmi = Column(Unicode(10))
    cc = Column(Text)
    pmh = Column(Text)
    fh = Column(Text)
    hpi = Column(Text)
    pe = Column(Text)
    create_date  = Column( TIMESTAMP(timezone=True), nullable=True ,default=sql.func.current_timestamp())
    update_date = Column(TIMESTAMP(timezone=True), nullable=True,onupdate=sql.func.current_timestamp() )
    
    def __init__(self, id_vitalsign=None, id_visit=None, weight=None, temperature=None,pressure=None,pulse=None, height=None,\
                 bmi = None, cc=None, pmh=None, fh=None, hpi=None, pe=None ):
        self.id_vitalsign =id_vitalsign if (id_vitalsign and len(id_vitalsign) >0) else None
        self.id_visit =id_visit if (id_visit and len(id_visit) >0) else None
        self.weight = weight
        self.temperature = temperature
        self.pulse = pulse
        self.pressure= pressure
        self.height = height
        self.bmi = bmi
        self.cc = cc
        self.pmh = pmh
        self.fh = fh
        self.hpi = hpi
        self.pe = pe
        
    def __repr__(self):
        return '<VisitVitalSign: name=%s>' % repr(self.id_vitalsign)

    def __unicode__(self):
        return self.id_vitalsign
    
    def save (self):
        DBSession.add(self); 
        DBSession.flush() ;
    
    def updateall(self):
        print "update"
        return DBSession.merge(self,load=True)
    
    @classmethod
    def getbysearch(cls, search="", idsearch="" ,page=0, page_size=None): 
    
        query = DBSession.query(cls).filter(cls.id_visit == str(idsearch),\
                                            # cls.service_date.is_(None),\
                                            #cls.finish_date.is_(None),\
                                            func.date(cls.create_date) == date.today()
                                            );
        query_total = query;                
        
        if page_size:
            query = query.limit(page_size)
        if page: 
            page = 0 if page < 0 else page;
            query = query.offset(page*page_size)
        
        data = query.all();  
        total = query_total.count();
                         
        return data,total;
    
class VisitOrder(DeclarativeBase):

    __tablename__ = 'visit_order'

    id_order = Column(Integer, autoincrement=True, primary_key=True)
    id_visit = Column( Integer,ForeignKey('visit.id_visit'), nullable=False, index=True) 
    id_item = Column( Integer,ForeignKey('item.id_item'), nullable=False, index=True) 
    quantity  = Column(Numeric)
    price  = Column(Numeric)
    total =  Column(Numeric)
    
    order_date = Column(DateTime, default=datetime.now)
    id_staff = Column( Integer,ForeignKey('tg_user.user_id'), nullable=False, index=True) 
    staff = relation('User', backref='visit_order_user_id')
    create_date  = Column( TIMESTAMP(timezone=True), nullable=True ,default=sql.func.current_timestamp())
    update_date = Column(TIMESTAMP(timezone=True), nullable=True,onupdate=sql.func.current_timestamp() )
    
    def __repr__(self):
        return '<VisitOrder: name=%s>' % repr(self.id_order)

    def __unicode__(self):
        return self.id_order

class VisitBilling(DeclarativeBase):

    __tablename__ = 'visit_billing'

    id_billing = Column(Integer, autoincrement=True, primary_key=True)
    id_visit = Column( Integer,ForeignKey('visit.id_visit'), nullable=False, index=True) 
    visit = relation('Visit', backref='visit_id_visit');
    total =  Column(Numeric)
    
    id_staff = Column( Integer,ForeignKey('tg_user.user_id'), nullable=False, index=True) 
    staff = relation('User', backref='visit_billing_user_id')
    
    create_date  = Column( TIMESTAMP(timezone=True), nullable=True ,default=sql.func.current_timestamp())
    update_date = Column(TIMESTAMP(timezone=True), nullable=True,onupdate=sql.func.current_timestamp() )
    
    def __repr__(self):
        return '<VisitBilling: name=%s>' % repr(self.id_order)

    def __unicode__(self):
        return self.id_order

class Item(DeclarativeBase):

    __tablename__ = 'item'

    id_item = Column(Integer, autoincrement=True, primary_key=True)
    itemname = Column(Unicode(255))
    nickname = Column(Unicode(255))
    genericname= Column(Unicode(255))
    id_item_type = Column( Integer,ForeignKey('item_type.id_item_type'), nullable=False, index=True) 
    price  = Column(Numeric)
    unit  = Column(Unicode(255))
    
    
    create_date  = Column( TIMESTAMP(timezone=True), nullable=True ,default=sql.func.current_timestamp())
    update_date = Column(TIMESTAMP(timezone=True), nullable=True,onupdate=sql.func.current_timestamp())
    
    def __repr__(self):
        return '<Item: name=%s>' % repr(self.itemname)

    def __unicode__(self):
        return self.itemname

    @classmethod
    def getbysearch(cls, search="", idsearch="" ,page=0, page_size=None): 
        
        if search is None:
            search = ''
        query = DBSession.query(cls).filter(cls.itemname.like('%' + str(search) + '%') );
        if idsearch and len(idsearch) >0 :
            query = query.filter(cls.id_item == str(idsearch) );
            
        query_total = query;                
        
        if page_size:
            query = query.limit(page_size)
        if page: 
            page = 0 if page < 0 else page;
            query = query.offset(page*page_size)
        
        data = query.all();  
        total = query_total.count();
                         
        return data,total;