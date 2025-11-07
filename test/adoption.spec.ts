import { expect } from 'chai';
import * as request from 'supertest';
import { INestApplication } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import { AppModule } from '../src/app.module';
import { disconnect } from 'mongoose';

describe('Adoption - functional tests', function() {
  let app: INestApplication;
  let server: any;
  before(async function(){
    this.timeout(20000);
    const moduleRef = await Test.createTestingModule({ imports: [AppModule] }).compile();
    app = moduleRef.createNestApplication();
    await app.init();
    server = app.getHttpServer();
  });

  after(async function(){
    await app.close();
    await disconnect();
  });

  let createdId: string;

  it('POST /api/adoption -> create adoption', async function(){
    const res = await request(server)
      .post('/api/adoption')
      .send({ petId: 'pet123', userId: 'user123' })
      .expect(201);
    expect(res.body).to.have.property('_id');
    createdId = res.body._id;
  });

  it('GET /api/adoption -> list', async function(){
    const res = await request(server).get('/api/adoption').expect(200);
    expect(res.body).to.be.an('array');
  });

  it('GET /api/adoption/:id -> get by id', async function(){
    const res = await request(server).get(`/api/adoption/${createdId}`).expect(200);
    expect(res.body).to.have.property('_id');
  });

  it('PUT /api/adoption/:id -> update', async function(){
    const res = await request(server).put(`/api/adoption/${createdId}`).send({ status: 'approved' }).expect(200);
    expect(res.body).to.have.property('status', 'approved');
  });

  it('DELETE /api/adoption/:id -> delete', async function(){
    const res = await request(server).delete(`/api/adoption/${createdId}`).expect(200);
    expect(res.body).to.have.property('ok', true);
  });
});