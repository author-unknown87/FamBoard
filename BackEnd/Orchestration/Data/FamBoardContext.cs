using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Orchestration.Models;

namespace Orchestration.Data;

public partial class FamBoardContext : DbContext
{
    public FamBoardContext(DbContextOptions<FamBoardContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Dinners> Dinners { get; set; }

    public virtual DbSet<Events> Events { get; set; }

    public virtual DbSet<Ingredients> Ingredients { get; set; }

    public virtual DbSet<Posts> Posts { get; set; }

    public virtual DbSet<Replies> Replies { get; set; }

    public virtual DbSet<RequestTypes> RequestTypes { get; set; }

    public virtual DbSet<Requests> Requests { get; set; }

    public virtual DbSet<Snacks> Snacks { get; set; }

    public virtual DbSet<Users> Users { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Dinners>(entity =>
        {
            entity.HasKey(e => e.PrimaryKey);

            entity.Property(e => e.Description).HasMaxLength(255);
            entity.Property(e => e.Name).HasMaxLength(255);
        });

        modelBuilder.Entity<Events>(entity =>
        {
            entity.HasKey(e => e.PrimaryKey);

            entity.Property(e => e.Description).HasMaxLength(255);
            entity.Property(e => e.Name).HasMaxLength(255);
            entity.Property(e => e.Notes).HasMaxLength(255);
        });

        modelBuilder.Entity<Ingredients>(entity =>
        {
            entity.HasNoKey();

            entity.Property(e => e.Name).HasMaxLength(255);

            entity.HasOne(d => d.DinnerPrimaryKeyNavigation).WithMany()
                .HasForeignKey(d => d.DinnerPrimaryKey)
                .HasConstraintName("FK_Ingredients_Dinners");
        });

        modelBuilder.Entity<Posts>(entity =>
        {
            entity.HasKey(e => e.PrimaryKey);

            entity.Property(e => e.Title).HasMaxLength(255);
        });

        modelBuilder.Entity<Replies>(entity =>
        {
            entity.HasKey(e => e.PrimaryKey);

            entity.Property(e => e.Body).HasMaxLength(255);

            entity.HasOne(d => d.PostPrimaryKeyNavigation).WithMany(p => p.Replies)
                .HasForeignKey(d => d.PostPrimaryKey)
                .HasConstraintName("FK_Replies_Posts");

            entity.HasOne(d => d.UserPrimaryKeyNavigation).WithMany(p => p.Replies)
                .HasForeignKey(d => d.UserPrimaryKey)
                .HasConstraintName("FK_Replies_Users");
        });

        modelBuilder.Entity<RequestTypes>(entity =>
        {
            entity.HasKey(e => e.PrimaryKey);

            entity.Property(e => e.Name).HasMaxLength(255);
        });

        modelBuilder.Entity<Requests>(entity =>
        {
            entity.HasKey(e => e.PrimaryKey);

            entity.Property(e => e.Description).HasMaxLength(255);
            entity.Property(e => e.Response).HasMaxLength(255);
            entity.Property(e => e.Title).HasMaxLength(255);

            entity.HasOne(d => d.TypePrimaryKeyNavigation).WithMany(p => p.Requests)
                .HasForeignKey(d => d.TypePrimaryKey)
                .HasConstraintName("FK_Requests_RequestTypes");
        });

        modelBuilder.Entity<Snacks>(entity =>
        {
            entity.HasKey(e => e.PrimaryKey);

            entity.Property(e => e.Measurement).HasMaxLength(255);
            entity.Property(e => e.Name).HasMaxLength(255);
        });

        modelBuilder.Entity<Users>(entity =>
        {
            entity.HasKey(e => e.PrimaryKey);

            entity.Property(e => e.Name).HasMaxLength(255);
            entity.Property(e => e.Password).HasMaxLength(255);
            entity.Property(e => e.ProfileImage).HasMaxLength(255);
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
