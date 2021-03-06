"""empty message

Revision ID: e58be14fefb9
Revises: 95ceee4213c2
Create Date: 2021-02-05 23:52:28.563306

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'e58be14fefb9'
down_revision = '95ceee4213c2'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('portfolio', schema=None) as batch_op:
        batch_op.drop_column('categoryName')

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('portfolio', schema=None) as batch_op:
        batch_op.add_column(sa.Column('categoryName', sa.VARCHAR(), nullable=False))

    # ### end Alembic commands ###
