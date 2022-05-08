from django.utils.translation import gettext_lazy as _

from cms.models import CMSPlugin


# class LineType(Enum):
#     BLUE = 'blue'
#     GRAY = 'gray'


class HorizontalLinePlugin(CMSPlugin):
    # type = EnumField(LineType, default=LineType.BLUE)

    def __str__(self):
        return _('Horizontal line plugin')
