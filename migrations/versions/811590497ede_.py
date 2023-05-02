"""empty message

Revision ID: 811590497ede
Revises: 
Create Date: 2023-04-29 00:34:50.896925

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '811590497ede'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('user',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('first_name', sa.String(length=50), nullable=False),
    sa.Column('last_name', sa.String(length=50), nullable=False),
    sa.Column('username', sa.String(length=20), nullable=False),
    sa.Column('email', sa.String(length=50), nullable=False),
    sa.Column('password', sa.String(length=256), nullable=False),
    sa.Column('phone', sa.String(length=20), nullable=False),
    sa.Column('birthdate', sa.Date(), nullable=True),
    sa.Column('address', sa.String(length=80), nullable=True),
    sa.Column('country', sa.String(length=20), nullable=False),
    sa.Column('gender', sa.String(length=20), nullable=True),
    sa.Column('emergency_contact_name', sa.String(length=20), nullable=True),
    sa.Column('emergency_contact_number', sa.String(length=20), nullable=True),
    sa.Column('emergency_contact_relationship', sa.String(length=20), nullable=True),
    sa.Column('credit_card', sa.String(), nullable=False),
    sa.Column('otp', sa.Integer(), nullable=False),
    sa.Column('otp_active', sa.Boolean(), nullable=False),
    sa.Column('twofa', sa.Boolean(), nullable=False),
    sa.Column('last_login', sa.Date(), nullable=False),
    sa.Column('email_recover', sa.Integer(), nullable=False),
    sa.Column('image_profile', sa.String(length=250), nullable=False),
    sa.Column('security_question_q1', sa.String(length=50), nullable=False),
    sa.Column('security_question_q2', sa.String(length=50), nullable=False),
    sa.Column('creation_date', sa.Date(), nullable=False),
    sa.Column('role', sa.String(length=20), nullable=False),
    sa.Column('status', sa.String(length=20), nullable=False),
    sa.Column('height', sa.Float(precision=10), nullable=True),
    sa.Column('weight', sa.Float(precision=10), nullable=True),
    sa.Column('other_sports', sa.String(length=20), nullable=True),
    sa.Column('level_training', sa.String(length=20), nullable=False),
    sa.Column('eating_habits', sa.String(length=20), nullable=True),
    sa.Column('injuries', sa.String(length=100), nullable=False),
    sa.Column('availability', sa.String(length=50), nullable=False),
    sa.Column('email_subscription', sa.Boolean(), nullable=False),
    sa.Column('numeric_preference', sa.String(length=10), nullable=False),
    sa.Column('access_gym', sa.Boolean(), nullable=False),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('email'),
    sa.UniqueConstraint('password'),
    sa.UniqueConstraint('phone'),
    sa.UniqueConstraint('username')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('user')
    # ### end Alembic commands ###
