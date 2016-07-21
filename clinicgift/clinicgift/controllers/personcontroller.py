# -*- coding: utf-8 -*-

from tg import expose, redirect, validate, flash, url
# from tg.i18n import ugettext as _
# from tg import predicates
from clinicgift import model

from clinicgift.lib.base import BaseController

import sys
# from clinicgift.model import DBSession
__all__ = ['PersonController']
class PersonController(BaseController):
    # Uncomment this line if your controller requires an authenticated user
    # allow_only = predicates.not_anonymous()
    
    @expose('clinicgift.templates.clinic')
    def index(self, **kw):
        return dict(page='desktop')

    @expose('json')
    def save(self, *args, **kw):
        reload(sys).setdefaultencoding("utf-8");
        self.success = True;
        self.message = 'create success';
        
        print kw
        self.person = model.Person(**kw)
        if self.person.id_person :
            self.person.updateall()
        else:
            self.person.save()
        
        print self.person.lastname
        return dict(success=self.success, message = self.message);
    

    