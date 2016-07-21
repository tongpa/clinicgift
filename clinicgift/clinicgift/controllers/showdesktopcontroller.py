# -*- coding: utf-8 -*-
"""{{target.capitalize()}} controller module"""

from tg import expose, redirect, validate, flash, url
# from tg.i18n import ugettext as _
# from tg import predicates

from clinicgift.lib.base import BaseController
# from clinicgift.model import DBSession

class DesktopController(BaseController):
    # Uncomment this line if your controller requires an authenticated user
    # allow_only = predicates.not_anonymous()
    
    @expose('clinicgift.templates.clinic')
    def index(self, **kw):
        return dict(page='desktop')
