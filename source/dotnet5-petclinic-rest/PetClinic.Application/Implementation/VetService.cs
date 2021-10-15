using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Intent.RoslynWeaver.Attributes;
using PetClinic.Application.Dtos;
using PetClinic.Application.Interfaces;
using PetClinic.Domain.Entities;
using PetClinic.Domain.Repositories;

[assembly: DefaultIntentManaged(Mode.Merge)]
[assembly: IntentTemplate("Intent.Application.ServiceImplementations", Version = "1.0")]

namespace PetClinic.Application.Implementation
{
    public class VetService : IVetService
    {
        private IVetRepository _vetRepository;
        private readonly ISpecialtyRepository _specialtyRepository;
        private IMapper _mapper;

        public VetService(IVetRepository vetRepository, ISpecialtyRepository specialtyRepository, IMapper mapper)
        {
            _vetRepository = vetRepository;
            _specialtyRepository = specialtyRepository;
            _mapper = mapper;
        }

        [IntentManaged(Mode.Merge, Body = Mode.Ignore, Signature = Mode.Fully)]
        public async Task<List<VetDTO>> GetAllVets()
        {
            var elements = await _vetRepository.FindAllAsync();
            return elements.MapToVetDTOList(_mapper);
        }

        [IntentManaged(Mode.Merge, Body = Mode.Ignore, Signature = Mode.Fully)]
        public async Task<VetDTO> GetVet(int vetId)
        {
            var element = await _vetRepository.FindByIdAsync(vetId);
            return element.MapToVetDTO(_mapper);
        }

        [IntentManaged(Mode.Merge, Body = Mode.Ignore, Signature = Mode.Fully)]
        public async Task AddVet(VetCreateDTO dto)
        {
            var specialties = await _specialtyRepository.FindByIdsAsync(dto.Specialties.ToArray());
            var newVet = new Vet
            {
                FirstName = dto.FirstName,
                LastName = dto.LastName,
                Specialties = specialties.Cast<Specialty>().ToList()
            };

            _vetRepository.Add(newVet);
        }

        [IntentManaged(Mode.Merge, Body = Mode.Ignore, Signature = Mode.Fully)]
        public async Task UpdateVet(int vetId, VetUpdateDTO dto)
        {
            var specialties = await _specialtyRepository.FindByIdsAsync(dto.Specialties.ToArray());
            var existingVet = await _vetRepository.FindByIdAsync(vetId);
            existingVet.FirstName = dto.FirstName;
            existingVet.LastName = dto.LastName;
            existingVet.Specialties = specialties.Cast<Specialty>().ToList();
        }

        [IntentManaged(Mode.Merge, Body = Mode.Ignore, Signature = Mode.Fully)]
        public async Task DeleteVet(int vetId)
        {
            var existingVet = await _vetRepository.FindByIdAsync(vetId);
            _vetRepository.Remove(existingVet);
        }

        public void Dispose()
        {
        }
    }
}