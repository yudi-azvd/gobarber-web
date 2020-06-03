import React, { useCallback, useState } from 'react';
import DayPicker, { DayModifiers } from 'react-day-picker';

import 'react-day-picker/lib/style.css';

import { FiPower, FiClock } from 'react-icons/fi';
import {
  Container,
  Header,
  HeaderContent,
  Profile,
  Content,
  Schedule,
  NextAppointment,
  Appointment,
  Calendar,
  Section,
} from './styles';

import logo from '../../assets/logo.svg';
import { useAuth } from '../../hooks/auth';

const Dashboard: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const { signOut, user } = useAuth();

  const handleDateChange = useCallback((day: Date, modifiers: DayModifiers) => {
    if (modifiers.available) {
      setSelectedDate(day);
    }
  }, []);

  return (
    <Container>
      <Header>
        <HeaderContent>
          <img src={logo} alt="Gobarber" />

          <Profile>
            <img src={user.avatar_url} alt={`Avatar do ${user.name}`} />

            <div>
              <span>Bem vindo</span>
              <strong>{user.name}</strong>
            </div>
          </Profile>

          <button type="button" onClick={signOut}>
            <FiPower size={20} />
          </button>
        </HeaderContent>
      </Header>

      <Content>
        <Schedule>
          <h1>Horários agendados</h1>
          <p>
            <span>Hoje</span>
            <span>Dia 06</span>
            <span>Segunda-feira</span>
          </p>
          <NextAppointment>
            <strong>Pŕoximo atendimento</strong>
            <div>
              <img
                src="https://avatars2.githubusercontent.com/u/37981839?s=460&u=3147ae4984af1a7bd04fa86c682b84a1c4bede9f&v=4"
                alt="avatar"
              />

              <strong>Yudi Yamane</strong>
              <span>
                <FiClock />
                08h00
              </span>
            </div>
          </NextAppointment>

          <Section>
            <strong>Manhã</strong>

            <Appointment>
              <span>
                <FiClock />
                08h00
              </span>
              <div>
                <img
                  src="https://avatars2.githubusercontent.com/u/37981839?s=460&u=3147ae4984af1a7bd04fa86c682b84a1c4bede9f&v=4"
                  alt=""
                />
              </div>
            </Appointment>
            <Appointment>
              <span>
                <FiClock />
                08h00
              </span>
              <div>
                <img
                  src="https://avatars2.githubusercontent.com/u/37981839?s=460&u=3147ae4984af1a7bd04fa86c682b84a1c4bede9f&v=4"
                  alt=""
                />
              </div>
            </Appointment>
          </Section>
          <Section>
            <strong>Tarde</strong>
            <Appointment>
              <span>
                <FiClock />
                08h00
              </span>
              <div>
                <img
                  src="https://avatars2.githubusercontent.com/u/37981839?s=460&u=3147ae4984af1a7bd04fa86c682b84a1c4bede9f&v=4"
                  alt=""
                />
              </div>
            </Appointment>
          </Section>
        </Schedule>
        <Calendar>
          <DayPicker
            weekdaysShort={['D', 'S', 'T', 'Q', 'Q', 'S', 'S']}
            fromMonth={new Date()}
            disabledDays={[{ daysOfWeek: [0, 6] }]}
            modifiers={{
              available: { daysOfWeek: [1, 2, 3, 4, 5] },
            }}
            selectedDays={selectedDate}
            onDayClick={handleDateChange}
            months={[
              'Janeiro',
              'Fevereiro',
              'Março',
              'Abril',
              'Maio',
              'Junho',
              'Julho',
              'Agosto',
              'Setembro',
              'Outubro',
              'Novembro',
              'Dezembro',
            ]}
          />
        </Calendar>
      </Content>
    </Container>
  );
};

export default Dashboard;
