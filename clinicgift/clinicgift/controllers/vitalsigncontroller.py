# -*- coding: utf-8 -*-

from tg import expose, redirect, validate, flash, url
# from tg.i18n import ugettext as _
# from tg import predicates
from clinicgift import model

from clinicgift.lib.base import BaseController

import sys
# from clinicgift.model import DBSession
__all__ = ['VitalSignController']
class VitalSignController(BaseController):
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
        
        self.data = model.VisitVitalSign(**kw)
        if self.data.id_vitalsign :
            self.data.updateall()
        else:
            self.data.save()        
        return dict(success=self.success, message = self.message);
    

    