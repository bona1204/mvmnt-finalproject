"""empty message

Revision ID: 567806285521
Revises: 
Create Date: 2023-05-16 19:01:51.257994

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '567806285521'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('user', schema=None) as batch_op:
        batch_op.alter_column('height',
               existing_type=sa.REAL(),
               type_=sa.Float(precision=10),
               existing_nullable=True)
        batch_op.alter_column('weight',
               existing_type=sa.REAL(),
               type_=sa.Float(precision=10),
               existing_nullable=True)

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('user', schema=None) as batch_op:
        batch_op.alter_column('weight',
               existing_type=sa.Float(precision=10),
               type_=sa.REAL(),
               existing_nullable=True)
        batch_op.alter_column('height',
               existing_type=sa.Float(precision=10),
               type_=sa.REAL(),
               existing_nullable=True)

    # ### end Alembic commands ###